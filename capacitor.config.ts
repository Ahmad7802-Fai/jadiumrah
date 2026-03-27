import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.jadiumrah.app',
  appName: 'Jadiumrah',

  webDir: 'out', // biarkan (tidak dipakai saat dev)

  server: {
    url: "http://192.168.0.10:3000", // 🔥 WAJIB
    cleartext: true
  },

  bundledWebRuntime: false,
};

export default config;