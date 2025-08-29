import AsyncStorage from '@react-native-async-storage/async-storage';

// Storage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER_DATA: 'user_data',
  APP_SETTINGS: 'app_settings',
} as const;

// Generic storage functions
export const storage = {
  // Set item
  async set(key: string, value: unknown): Promise<void> {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error('Error saving to storage:', error);
      throw error;
    }
  },

  // Get item
  async get<T>(key: string): Promise<T | null> {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue !== null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error('Error reading from storage:', error);
      return null;
    }
  },

  // Remove item
  async remove(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from storage:', error);
      throw error;
    }
  },

  // Clear all storage
  async clear(): Promise<void> {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Error clearing storage:', error);
      throw error;
    }
  },

  // Get all keys
  async getAllKeys(): Promise<string[]> {
    try {
      const keys = await AsyncStorage.getAllKeys();
      return [...keys]; // Convert readonly array to mutable array
    } catch (error) {
      console.error('Error getting storage keys:', error);
      return [];
    }
  },
};

// Auth-specific storage functions
export const authStorage = {
  // Save auth token
  async saveToken(token: string): Promise<void> {
    await storage.set(STORAGE_KEYS.AUTH_TOKEN, token);
  },

  // Get auth token
  async getToken(): Promise<string | null> {
    return await storage.get<string>(STORAGE_KEYS.AUTH_TOKEN);
  },

  // Remove auth token
  async removeToken(): Promise<void> {
    await storage.remove(STORAGE_KEYS.AUTH_TOKEN);
  },

  // Save user data
  async saveUserData(userData: unknown): Promise<void> {
    await storage.set(STORAGE_KEYS.USER_DATA, userData);
  },

  // Get user data
  async getUserData<T>(): Promise<T | null> {
    return await storage.get<T>(STORAGE_KEYS.USER_DATA);
  },

  // Remove user data
  async removeUserData(): Promise<void> {
    await storage.remove(STORAGE_KEYS.USER_DATA);
  },

  // Clear all auth data
  async clearAuth(): Promise<void> {
    await Promise.all([
      storage.remove(STORAGE_KEYS.AUTH_TOKEN),
      storage.remove(STORAGE_KEYS.USER_DATA),
    ]);
  },
};
