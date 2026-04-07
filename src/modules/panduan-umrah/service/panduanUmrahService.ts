import type { PanduanUmrahItem } from "../types/panduan-umrah.types"

export function getPanduanUmrahData(): PanduanUmrahItem[] {
  return [
    {
      id: "doa-safar",
      step: 1,
      badge: "Awal Perjalanan",
      title: "Doa Safar",
      subtitle: "Dibaca ketika memulai perjalanan menuju tanah suci",
      arabic:
        "اللّٰهُ أَكْبَرُ، اللّٰهُ أَكْبَرُ، اللّٰهُ أَكْبَرُ، سُبْحَانَ الَّذِيْ سَخَّرَ لَنَا هٰذَا وَمَا كُنَّا لَهُ مُقْرِنِيْنَ، وَاِنَّا اِلٰى رَبِّنَا لَمُنْقَلِبُوْنَ",
      latin:
        "Allahu akbar, Allahu akbar, Allahu akbar. Subhanalladzi sakhkhara lana hadza wa ma kunna lahu muqrinin, wa inna ila rabbina lamunqalibun.",
      meaning:
        "Maha Suci Allah yang telah menundukkan kendaraan ini untuk kami, padahal kami sebelumnya tidak mampu menguasainya, dan sesungguhnya kami akan kembali kepada Tuhan kami.",
      points: [
        "Niatkan perjalanan untuk ibadah karena Allah.",
        "Perbanyak dzikir, istighfar, dan shalawat selama safar.",
        "Jaga adab, lisan, dan hati sepanjang perjalanan.",
      ],
    },
    {
      id: "niat-ihram",
      step: 2,
      badge: "Miqat",
      title: "Niat Ihram Umrah",
      subtitle: "Diucapkan saat mulai berihram dari miqat",
      arabic: "لَبَّيْكَ عُمْرَةً",
      latin: "Labbaika 'umratan.",
      meaning: "Aku penuhi panggilan-Mu untuk menunaikan umrah.",
      points: [
        "Mandi sunnah sebelum ihram bila memungkinkan.",
        "Laki-laki memakai kain ihram, perempuan memakai pakaian syar'i.",
        "Niat umrah dilakukan dari miqat lalu menjaga larangan ihram.",
      ],
    },
    {
      id: "talbiyah",
      step: 3,
      badge: "Dzikir Utama",
      title: "Talbiyah",
      subtitle: "Dibaca sejak niat umrah hingga sebelum thawaf",
      arabic:
        "لَبَّيْكَ اللّٰهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيْكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيْكَ لَكَ",
      latin:
        "Labbaikallahumma labbaik, labbaika la syarika laka labbaik. Innal hamda wan ni'mata laka wal mulk, la syarika lak.",
      meaning:
        "Aku penuhi panggilan-Mu ya Allah, aku penuhi panggilan-Mu. Tiada sekutu bagi-Mu, aku penuhi panggilan-Mu. Sesungguhnya segala puji, nikmat, dan kerajaan adalah milik-Mu, tiada sekutu bagi-Mu.",
      points: [
        "Baca talbiyah berulang-ulang dengan khusyuk.",
        "Laki-laki disunnahkan mengeraskan suara, perempuan lirih.",
        "Talbiyah dibaca sampai akan memulai thawaf.",
      ],
    },
    {
      id: "masuk-masjidil-haram",
      step: 4,
      badge: "Masuk Area Ibadah",
      title: "Masuk Masjidil Haram",
      subtitle: "Masuk dengan tenang, mendahulukan kaki kanan, dan berdoa",
      arabic: "اللّٰهُمَّ افْتَحْ لِيْ أَبْوَابَ رَحْمَتِكَ",
      latin: "Allahummaftah li abwaba rahmatik.",
      meaning: "Ya Allah, bukakanlah untukku pintu-pintu rahmat-Mu.",
      points: [
        "Masuk dengan kaki kanan dan hati yang tunduk.",
        "Jaga ketenangan dan tidak saling dorong.",
        "Perbanyak dzikir hingga melihat Ka'bah.",
      ],
    },
    {
      id: "melihat-kabah",
      step: 5,
      badge: "Momen Istimewa",
      title: "Ketika Melihat Ka’bah",
      subtitle: "Perbanyak doa saat pertama kali memandang Ka'bah",
      arabic:
        "اللّٰهُمَّ زِدْ هٰذَا الْبَيْتَ تَشْرِيْفًا وَتَعْظِيْمًا وَتَكْرِيْمًا وَمَهَابَةً",
      latin:
        "Allahumma zid hadzal baita tasyriifan wa ta'zhiman wa takriman wa mahabah.",
      meaning:
        "Ya Allah, tambahkanlah kemuliaan, keagungan, kehormatan, dan kewibawaan pada rumah ini.",
      points: [
        "Perbanyak doa pribadi dan rasa syukur.",
        "Tenangkan hati sebelum memulai thawaf.",
        "Jadikan momen ini sebagai pembuka ibadah yang khusyuk.",
      ],
    },
    {
      id: "thawaf",
      step: 6,
      badge: "Rukun Umrah",
      title: "Thawaf",
      subtitle: "Mengelilingi Ka'bah 7 putaran dimulai dari Hajar Aswad",
      arabic: "بِسْمِ اللّٰهِ، اَللّٰهُ أَكْبَرُ",
      latin: "Bismillah, Allahu akbar.",
      meaning: "Dengan nama Allah, Allah Maha Besar.",
      points: [
        "Mulai sejajar Hajar Aswad dan niat thawaf umrah.",
        "Ka'bah berada di sebelah kiri selama 7 putaran.",
        "Perbanyak doa, dzikir, dan bacaan Al-Qur'an.",
        "Jaga ritme jalan agar tetap tenang dan aman.",
      ],
    },
    {
      id: "sai",
      step: 7,
      badge: "Rukun Umrah",
      title: "Sa’i",
      subtitle: "Berjalan 7 kali antara Shafa dan Marwah",
      arabic: "إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللّٰهِ",
      latin: "Inna ash-shafa wal marwata min sya'a'irillah.",
      meaning: "Sesungguhnya Shafa dan Marwah adalah sebagian dari syiar Allah.",
      points: [
        "Mulai dari Shafa dan berakhir di Marwah.",
        "Satu lintasan dihitung dari Shafa ke Marwah atau sebaliknya.",
        "Total 7 lintasan dan akhiri di Marwah.",
        "Perbanyak doa dan dzikir di sepanjang sa’i.",
      ],
    },
    {
      id: "tahallul",
      step: 8,
      badge: "Penutup Umrah",
      title: "Tahallul",
      subtitle: "Mencukur atau memendekkan rambut sebagai penutup umrah",
      arabic: "اللّٰهُمَّ اغْفِرْ لِلْمُحَلِّقِيْنَ",
      latin: "Allahummaghfir lil muhalliqin.",
      meaning: "Ya Allah, ampunilah orang-orang yang mencukur rambutnya.",
      points: [
        "Laki-laki utama mencukur habis atau memendekkan merata.",
        "Perempuan cukup memotong ujung rambut sedikit.",
        "Setelah tahallul, larangan ihram berakhir dan umrah selesai.",
      ],
    },
  ]
}