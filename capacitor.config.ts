import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.jadiumrah.app',
  appName: 'Jadiumrah',

  webDir: 'out', // untuk build production

  server: {
    url: "http://192.168.0.10:3000", // 🔥 IP laptop
    cleartext: true
  },

  bundledWebRuntime: false,
};

export default config;