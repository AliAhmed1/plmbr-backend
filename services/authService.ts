import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import  UserService from './userService';
import ProviderService from './providerService'; // Import your existing services
import { processSchemaAndData } from '../utils/addCommonFields';
import { userSchema, providerSchema } from '../schema/generatedZodSchema'; // Import your Zod schemas

const JWT_SECRET = process.env.JWT_SECRET;

const AuthService = {
    signup: async (data: any, isProvider: boolean) => {
      // Check if the email already exists
      const existingUserOrProvider = isProvider
        ? await ProviderService.getProviderByEmail(data.email)
        : await UserService.getUserByEmail(data.email);
  
      if (existingUserOrProvider) {
        throw new Error('Email already exists');
      }
  
      // Hash the password before storing it
      const hashedPassword = await bcrypt.hash(data.password, 8);
      const userData = { ...data, password: hashedPassword };
  
      // Create the user or provider
      const userOrProvider = isProvider
        ? await ProviderService.createProvider(userData)
        : await UserService.createUser(userData);
  
      // Generate a JWT token
      const token = jwt.sign(
        { id: userOrProvider.id, email: userOrProvider.email, userType: isProvider ? 'Provider' : 'User', },
        JWT_SECRET as Secret,
        { expiresIn: '1h' }
      );
  
      return { token, userOrProvider };
    },
  
    login: async (email: string, password: string, isProvider: boolean) => {
      // Find the user or provider by email
      const userOrProvider = isProvider
        ? await ProviderService.getProviderByEmail(email)
        : await UserService.getUserByEmail(email);
  
      if (!userOrProvider) {
        throw new Error('Email or password is incorrect');
      }
  
      // Compare the provided password with the stored hash
      const isMatch = await bcrypt.compare(password, userOrProvider.password);
  
      if (!isMatch) {
        throw new Error('Email or password is incorrect');
      }
  
      // Generate a JWT token
      const token = jwt.sign(
        { id: userOrProvider.id, email: userOrProvider.email, userType: isProvider ? 'Provider' : 'User', },
        JWT_SECRET as Secret,
        { expiresIn: '1h' }
      );
  
      return { token, userOrProvider };
    },
  
    getUserByToken: async (token: string) => {
      try {
        // Verify the token
        const decoded = jwt.verify(token, JWT_SECRET as Secret);
    
        // Check if decoded is a JwtPayload object
        if (typeof decoded === 'object' && 'id' in decoded) {
          const decodedPayload = decoded as JwtPayload;
    
          // Retrieve the user or provider by ID
          const userOrProvider = decoded.userType === 'Provider'
          ? await ProviderService.getProviderById(decodedPayload.id)
            : await UserService.getUserById(decodedPayload.id);
    
          if (!userOrProvider) {
            throw new Error('User or provider not found');
          }
    
          return userOrProvider;
        } else {
          throw new Error('Invalid token payload');
        }
      } catch (err) {
        throw new Error('Invalid token');
      }
    },
  };
  
  export = AuthService;