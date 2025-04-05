declare global {
    interface Window {
      tsParticles: {
        load: (id: string, options: unknown) => Promise<void>;
      };
    }
  }
  
  export {};
  