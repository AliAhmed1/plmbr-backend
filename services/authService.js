"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userService_1 = __importDefault(require("./userService"));
const providerService_1 = __importDefault(require("./providerService")); // Import your existing services
const JWT_SECRET = process.env.JWT_SECRET;
const AuthService = {
    signup: (data, isProvider) => __awaiter(void 0, void 0, void 0, function* () {
        // Check if the email already exists
        const existingUserOrProvider = isProvider
            ? yield providerService_1.default.getProviderByEmail(data.email)
            : yield userService_1.default.getUserByEmail(data.email);
        if (existingUserOrProvider) {
            throw new Error('Email already exists');
        }
        // Hash the password before storing it
        const hashedPassword = yield bcryptjs_1.default.hash(data.password, 8);
        const userData = Object.assign(Object.assign({}, data), { password: hashedPassword });
        // Create the user or provider
        const userOrProvider = isProvider
            ? yield providerService_1.default.createProvider(userData)
            : yield userService_1.default.createUser(userData);
        // Generate a JWT token
        const token = jsonwebtoken_1.default.sign({ id: userOrProvider.id, email: userOrProvider.email, userType: isProvider ? 'Provider' : 'User', }, JWT_SECRET, { expiresIn: '1h' });
        return { token, userOrProvider };
    }),
    login: (email, password, isProvider) => __awaiter(void 0, void 0, void 0, function* () {
        // Find the user or provider by email
        const userOrProvider = isProvider
            ? yield providerService_1.default.getProviderByEmail(email)
            : yield userService_1.default.getUserByEmail(email);
        if (!userOrProvider) {
            throw new Error('Email or password is incorrect');
        }
        // Compare the provided password with the stored hash
        const isMatch = yield bcryptjs_1.default.compare(password, userOrProvider.password);
        if (!isMatch) {
            throw new Error('Email or password is incorrect');
        }
        // Generate a JWT token
        const token = jsonwebtoken_1.default.sign({ id: userOrProvider.id, email: userOrProvider.email, userType: isProvider ? 'Provider' : 'User', }, JWT_SECRET, { expiresIn: '1h' });
        return { token, userOrProvider };
    }),
    getUserByToken: (token) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // Verify the token
            const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
            // Check if decoded is a JwtPayload object
            if (typeof decoded === 'object' && 'id' in decoded) {
                const decodedPayload = decoded;
                // Retrieve the user or provider by ID
                const userOrProvider = decoded.userType === 'Provider'
                    ? yield providerService_1.default.getProviderById(decodedPayload.id)
                    : yield userService_1.default.getUserById(decodedPayload.id);
                if (!userOrProvider) {
                    throw new Error('User or provider not found');
                }
                return userOrProvider;
            }
            else {
                throw new Error('Invalid token payload');
            }
        }
        catch (err) {
            throw new Error('Invalid token');
        }
    }),
};
module.exports = AuthService;
