import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type Profile = {
  name: string;
  email: string;
  details: string | undefined;
};

type ProfileStateProps = {
  profile: Profile | undefined;
  addProfile: (profile: Profile) => boolean;
  editProfile: (profile: Profile) => boolean;
  removeProfile: () => void;
};

const PROFILE_STORAGE_NAME = 'profile-storage';

const initialProfileState: Omit<ProfileStateProps, 'addProfile' | 'editProfile' | 'removeProfile'> =
  {
    profile: undefined,
  };

export const useProfileStore = create<ProfileStateProps>()(
  persist(
    (set, get) => ({
      profile: undefined,
      addProfile: (profile) => {
        let response: boolean = false;
        try {
          set((state) => {
            const copyState = { ...state };
            copyState.profile = { ...profile };
            return { ...copyState };
          });
          response = true;
        } catch (error) {
          // This error should throw if any problems with asyncStorage or something;
          throw `Problem setting up profile`;
        }
        return response;
      },
      editProfile: (profile) => {
        let response: boolean = false;
        try {
          set((state) => {
            const copyState = { ...state };
            copyState.profile = { ...profile };
            return { ...copyState };
          });
          response = true;
        } catch (error) {
          throw `Problem updating profile, ${error}`;
        }
        return response;
      },
      removeProfile: () => {
        set({ ...initialProfileState });
      },
    }),
    {
      name: PROFILE_STORAGE_NAME,
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
