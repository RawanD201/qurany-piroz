// The Quranic 3D simulations offered on the home page, in the order of the accounts they tell.
// Each is a separate project built into /3d/<id>/ by scripts/sync-3d-simulations.mjs, which also
// reads this list to know which ones to build.
//
// The simulations themselves are in three languages: English, Central Kurdish (the Hevi
// translation of the verses) and Arabic (with al-Tafsir al-Muyassar). `title` holds each name in
// those three; `ref` is the main passage as [surah, first verse, last verse].
(function () {
  'use strict';

  window.QPSimulations = [
    { id: 'noahs-flood', ref: [11, 25, 49], title: { en: 'The Flood of Noah', ckb: 'تۆفانەکەی نوح', ar: 'طوفان نوح' } },
    { id: 'people-of-ad-and-devastating-wind', ref: [46, 21, 25], title: { en: 'The People of ʿĀd', ckb: 'قەومی عاد', ar: 'قوم عاد' } },
    { id: 'thamud-and-the-she-camel', ref: [7, 73, 79], title: { en: 'Thamud and the She-Camel', ckb: 'سەموود و وشترمێکە', ar: 'ثمود والناقة' } },
    { id: 'people-of-lot', ref: [11, 69, 83], title: { en: 'The People of Lot', ckb: 'قەومی ڵوت', ar: 'قوم لوط' } },
    { id: 'josephs-journey', ref: [12, 4, 101], title: { en: 'Joseph’s Journey', ckb: 'گەشتی یوسف', ar: 'رحلة يوسف' } },
    { id: 'crossing-of-the-sea', ref: [26, 52, 68], title: { en: 'The Crossing of the Sea', ckb: 'پەڕینەوە لە دەریا', ar: 'عبور البحر' } },
    { id: 'qarun-and-his-destruction', ref: [28, 76, 82], title: { en: 'Qarun', ckb: 'قاروون', ar: 'قارون' } },
    { id: 'david-and-goliath', ref: [2, 246, 251], title: { en: 'David and Goliath', ckb: 'داوود و جالووت', ar: 'داود وجالوت' } },
    { id: 'queen-of-sheba-and-solomon', ref: [27, 20, 44], title: { en: 'The Queen of Sheba', ckb: 'شاژنی شەبا', ar: 'ملكة سبأ' } },
    { id: 'jonah-in-the-darkness', ref: [37, 139, 148], title: { en: 'Jonah in the Darkness', ckb: 'یونس لەنێو تاریکییەکاندا', ar: 'يونس في الظلمات' } },
    { id: 'ruined-town-and-restoration', ref: [2, 259, 259], title: { en: 'The Ruined Town', ckb: 'باژێڕە وێرانەکە', ar: 'القرية الخاوية' } },
    { id: 'companions-of-the-cave', ref: [18, 9, 26], title: { en: 'Companions of the Cave', ckb: 'هاودەمانی ئەشکەوتەکە', ar: 'أصحاب الكهف' } },
    { id: 'owners-of-two-gardens', ref: [18, 32, 44], title: { en: 'The Two Gardens', ckb: 'دوو باخەکە', ar: 'الجنتان' } },
    { id: 'army-of-the-elephant', ref: [105, 1, 5], title: { en: 'The Army of the Elephant', ckb: 'سوپای فیل', ar: 'جيش الفيل' } },
    { id: 'night-journey-al-isra', ref: [17, 1, 1], title: { en: 'The Night Journey', ckb: 'شەوڕەوی', ar: 'الإسراء' } },
    { id: 'battle-of-badr', ref: [8, 5, 19], title: { en: 'The Battle of Badr', ckb: 'جەنگی بەدر', ar: 'غزوة بدر' } },
    { id: 'battle-of-uhud', ref: [3, 121, 180], title: { en: 'Uhud', ckb: 'ئوحود', ar: 'أُحد' } },
    { id: 'battle-of-the-trench', ref: [33, 9, 27], title: { en: 'The Battle of the Trench', ckb: 'جەنگی خەندەق', ar: 'غزوة الخندق' } },
    { id: 'hudaybiyyah-treaty-and-pledge', ref: [48, 1, 29], title: { en: 'Hudaybiyyah', ckb: 'حودەیبیە', ar: 'الحديبية' } },
  ];
})();
