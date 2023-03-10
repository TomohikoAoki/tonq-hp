const state = () => ({
    shopData: [{
            id: 1,
            name: "とんかつとんＱつくば本店",
            slug: "tsukuba",
            url: "http://ton-q.com/shop/tsukuba",
            "@context": "http://schema.org",
            "@type": "Restaurant",
            servesCuisine: "とんかつ",
            menu: "http://ton-q.com/menu/",
            mainImage: [
                "photo-tsukuba-l.webp",
                "photo-tsukuba-m.webp",
                "photo-tsukuba-s.webp",
            ],
            //"image": "http://ton-q.com/shop/imgae/photo_tsukubas.jpg",
            description: "とんかつとんQつくば本店は、平成23年に農林水産大臣賞を受賞した「やまと豚」のとんかつを中心に、お膳の５品（とんかつ・キャベツ・ご飯・味噌汁・お新香）にこだわるとんかつ専門店。つくば万博が開催される3年前の昭和58年に茨城県つくば市で創業して以来、こだわりの料理と心からの接客で、地域で一番のお店を目指しております。",
            telephone: "029-852-4509",
            address: {
                "@type": "PostalAddress",
                streetAddress: "東新井13番12号",
                addressLocality: "つくば市",
                addressRegion: "茨城県",
                postalCode: "305-0033",
                addressCountry: "JP",
            },
            access: "TXつくば、つくば駅より徒歩12分",
            open: {
                weekday: "11:00 ~ 21:00(L.O.20:30)",
                holiday: "11:00 ~ 22:00(L.O.21:30)",
                lunchTime: "平日・土曜11:00 ~ 15:00",
            },
            closeDays: `基本木曜日`,
            sheet: "９１席（座敷席あり）",
            payment: "現金・クレジットカード・Paypay",
            privateRoom: "無し",
            parking: "有り",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.6760462389316!2d140.10851385168883!3d36.07700491567257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60220c861812a0d7%3A0x20caf834271cd1af!2z44Go44KT44GL44Gk44Go44KTUeOBpOOBj-OBsOacrOW6lw!5e0!3m2!1sja!2sjp!4v1487921286372",
            sns: {
                instagram: "https://www.instagram.com/tonqtsukuba/?hl=ja",
            },
            calendar: true,
            close: [{
                    month: 8,
                    day: [4, 10, 18, 25],
                },
                { month: 9, day: [8, 15, 22, 29] },
            ],
            priceRange: "¥1,000 ~ ¥2,500",
            geo: {
                "@type": "GeoCoordinates",
                latitude: 36.07695941524366,
                longitude: 140.1107275212079,
            },
            openingHoursSpecification: [{
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    opens: "11:00",
                    closes: "21:00",
                },
                {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Saturday", "Sunday"],
                    opens: "11:00",
                    closes: "22:00",
                },
            ],
        },
        {
            id: 2,
            name: "とんかつとんＱ水戸千波店",
            slug: "senba",
            url: "http://ton-q.com/shop/senba",
            "@context": "http://schema.org",
            "@type": "Restaurant",
            servesCuisine: "とんかつ",
            menu: "http://ton-q.com/menu/",
            mainImage: [
                "photo-senba-l.webp",
                "photo-senba-m.webp",
                "photo-senba-s.webp",
            ],
            //"image": "http://ton-q.com/shop/imgae/photo_tsukubas.jpg",
            description: "茨城県庁のすぐ近く、サントル千波の交差点にあるとんかつとんＱ水戸千波店は、創業して３１年のお膳の５品（とんかつ・キャベツ・ご飯・味噌汁・お新香）にこだわるとんかつ専門店です。平成２３年に農林水産大臣賞を受賞した「やまと豚」のとんかつを中心に、こだわりの料理と心からの接客で、地域で１番のお店を目指しております。",
            telephone: "029-243-1181",
            address: {
                "@type": "PostalAddress",
                streetAddress: "千波町1999-5",
                addressLocality: "水戸市",
                addressRegion: "茨城県",
                postalCode: "310-0851",
                addressCountry: "JP",
            },
            access: "JR常磐線水戸駅南口から 車20分",
            open: {
                weekday: "11:00 ~ 21:00(L.O.20:30)",
                holiday: "11:00 ~ 22:00(L.O.21:30)",
                lunchTime: "平日・土曜11:00 ~ 15:00",
            },
            closeDays: `基本木曜日`,
            sheet: "124席（座敷席あり）",
            payment: "現金・クレジットカード・Paypay",
            privateRoom: "無し",
            parking: "有り",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3213.4768509922337!2d140.4423409508372!3d36.34922697994602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60222491c76d0cdd%3A0xdd25e7ea8dcd4b36!2z44Go44KT44GL44Gk44Go44KTUSDmsLTmiLjljYPms6Llupc!5e0!3m2!1sja!2sjp!4v1488161768185",
            sns: {},
            calendar: true,
            close: [{
                    month: 8,
                    day: [4, 10, 18, 25],
                },
                { month: 9, day: [8, 15, 22, 29] },
            ],
            priceRange: "¥1,000 ~ ¥2,500",
            geo: {
                "@type": "GeoCoordinates",
                latitude: 36.34920838531321,
                longitude: 140.4445431080756,
            },
            openingHoursSpecification: [{
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    opens: "11:00",
                    closes: "21:00",
                },
                {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Saturday", "Sunday"],
                    opens: "11:00",
                    closes: "22:00",
                },
            ],
        },
        {
            id: 3,
            name: "とんかつとんＱ守谷ふれあい店",
            slug: "moriya",
            url: "http://ton-q.com/shop/moriya",
            "@context": "http://schema.org",
            "@type": "Restaurant",
            servesCuisine: "とんかつ",
            menu: "http://ton-q.com/menu/",
            mainImage: [
                "photo-moriya-l.webp",
                "photo-moriya-m.webp",
                "photo-moriya-s.webp",
            ],
            //"image": "http://ton-q.com/shop/imgae/photo_tsukubas.jpg",
            description: "守谷市役所にほど近い、ふれあい道路沿いにあるとんかつとんＱ守谷ふれあい店は、平成２３年に農林水産大臣賞を受賞した「やまと豚」のとんかつを中心に、お膳の５品（とんかつ・キャベツ・ご飯・味噌汁・お新香）にこだわるとんかつ専門店。お客様に満足していただけるよう、マニュアルでない心からの接客と、こだわりの料理で、守谷で１番の飲食店を目指しております。",
            telephone: "0297-45-9109",
            address: {
                "@type": "PostalAddress",
                streetAddress: "立沢991-8",
                addressLocality: "守谷市",
                addressRegion: "茨城県",
                postalCode: "302-0118",
                addressCountry: "JP",
            },
            access: "守谷駅から1.4km 守谷市役所そば",
            open: {
                weekday: "11:00 ~ 21:00(L.O.20:30)",
                holiday: "11:00 ~ 22:00(L.O.21:30)",
                lunchTime: "平日・土曜11:00 ~ 15:00",
            },
            closeDays: `基本火曜日`,
            sheet: "86席（座敷席あり）",
            payment: "現金・クレジットカード・Paypay",
            privateRoom: "無し",
            parking: "有り",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3229.7353712094978!2d139.97796095006845!3d35.95344298003419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60189e551d2d4601%3A0x5408750c7d78c713!2z44Go44KT44GL44Gk44Go44KTUSDlrojosLfjgbXjgozjgYLjgYTlupc!5e0!3m2!1sja!2sjp!4v1488162974313",
            sns: {},
            calendar: true,
            close: [{
                    month: 8,
                    day: [4, 10, 18, 25],
                },
                { month: 9, day: [6, 13, 20, 27] },
            ],
            priceRange: "¥1,000 ~ ¥2,500",
            geo: {
                "@type": "GeoCoordinates",
                latitude: 35.95345154873813,
                longitude: 139.9801559941048,
            },
            openingHoursSpecification: [{
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    opens: "11:00",
                    closes: "21:00",
                },
                {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Saturday", "Sunday"],
                    opens: "11:00",
                    closes: "22:00",
                },
            ],
        },
        {
            id: 4,
            name: "とんかつとんＱ成田ニュータウン店",
            slug: "narita",
            url: "http://ton-q.com/shop/narita",
            "@context": "http://schema.org",
            "@type": "Restaurant",
            servesCuisine: "とんかつ",
            menu: "http://ton-q.com/menu/",
            mainImage: [
                "photo-narita-l.webp",
                "photo-narita-m.webp",
                "photo-narita-s.webp",
            ],
            //"image": "http://ton-q.com/shop/imgae/photo_tsukubas.jpg",
            description: "京成本線の公津の杜駅近くにあるとんかつとんＱ成田ニュータウン店は、平成２３年に農林水産大臣賞を受賞した「やまと豚」のとんかつを中心に、お膳の５品（とんかつ・キャベツ・ご飯・味噌汁・お新香）にこだわるとんかつ専門店。創業して１９年、成田の地でこだわりの料理と心からの接客で、地域で１番のお店を目指しております。",
            telephone: "0296-20-8668",
            address: {
                "@type": "PostalAddress",
                streetAddress: "江弁須96-31",
                addressLocality: "成田市",
                addressRegion: "千葉県",
                postalCode: "286-0047",
                addressCountry: "JP",
            },
            access: "京成本線公津の杜駅から404m",
            open: {
                weekday: "11:00 ~ 21:00(L.O.20:30)",
                holiday: "11:00 ~ 22:00(L.O.21:30)",
                lunchTime: "平日・土曜11:00 ~ 15:00",
            },
            closeDays: `基本月曜日`,
            sheet: "88席（座敷席あり）",
            payment: "現金・クレジットカード・Paypay",
            privateRoom: "無し",
            parking: "有り",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.4590743020312!2d140.2929529500614!3d35.764097980077814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60228b971504553b%3A0xe5b2a782d37b45e5!2z44Go44KT44GL44Gk44Go44KTUSDmiJDnlLDjg4vjg6Xjg7zjgr_jgqbjg7Plupc!5e0!3m2!1sja!2sjp!4v1488164064520",
            sns: {
                twitter: "https://twitter.com/tonq_narita",
            },
            calendar: true,
            close: [{
                    month: 8,
                    day: [4, 10, 18, 25],
                },
                { month: 9, day: [5, 12, 20, 26] },
            ],
            priceRange: "¥1,000 ~ ¥2,500",
            geo: {
                "@type": "GeoCoordinates",
                latitude: 35.76408624226798,
                longitude: 140.29517582673827,
            },
            openingHoursSpecification: [{
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    opens: "11:00",
                    closes: "21:00",
                },
                {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Saturday", "Sunday"],
                    opens: "11:00",
                    closes: "22:00",
                },
            ],
        },
        {
            id: 5,
            name: "とんかつとんＱ春日部店",
            slug: "kasukabe",
            url: "http://ton-q.com/shop/kasukabe",
            "@context": "http://schema.org",
            "@type": "Restaurant",
            servesCuisine: "とんかつ",
            menu: "http://ton-q.com/menu/",
            mainImage: [
                "photo-kasukabe-l.webp",
                "photo-kasukabe-m.webp",
                "photo-kasukabe-s.webp",
            ],
            //"image": "http://ton-q.com/shop/imgae/photo_tsukubas.jpg",
            description: "東京スカイツリーラインの武里駅から1.5kmほどにあるとんかつとんＱ春日部店は、平成23年に農林水産大臣賞を受賞した「やまと豚」のとんかつを中心に、お膳の五品（とんかつ・キャベツ・ご飯・味噌汁・お新香）にこだわるとんかつ専門店。こだわりの料理と心からの接客で、春日部で一番の飲食店を目指しております。",
            telephone: "048-731-7670",
            address: {
                "@type": "PostalAddress",
                streetAddress: "備後東3丁目17-15",
                addressLocality: "春日部市",
                addressRegion: "埼玉県",
                postalCode: "344-0032",
                addressCountry: "JP",
            },
            access: "東武伊勢崎線武里駅から約1km",
            open: {
                weekday: ["11:00 ~ 15:00(L.O.14:30)", "17:00 ~ 21:00(L.O.20:30)"],
                holiday: "11:00 ~ 22:00(L.O.21:30)",
                lunchTime: "平日・土曜11:00 ~ 15:00",
            },
            closeDays: `基本水曜日`,
            sheet: "80席（座敷席あり）",
            payment: "現金・クレジットカード・Paypay",
            privateRoom: "無し",
            parking: "有り",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3229.5799465599634!2d139.77322467860103!3d35.95724432249171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018bc27b2cf4bc1%3A0x23effc8a71037540!2z44Go44KT44GL44Gk44Go44KTUSDmmKXml6Xpg6jlupc!5e0!3m2!1sja!2sjp!4v1488167291562",
            sns: {},
            calendar: true,
            close: [{
                    month: 8,
                    day: [4, 10, 18, 25],
                },
                { month: 9, day: [7, 14, 21, 28] },
            ],
            priceRange: "¥1,000 ~ ¥2,500",
            geo: {
                "@type": "GeoCoordinates",
                latitude: 35.95725108208185,
                longitude: 139.7754080504288,
            },
            openingHoursSpecification: [{
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    opens: "11:00",
                    closes: "15:00",
                },
                {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    opens: "17:00",
                    closes: "21:00",
                },
                {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Saturday", "Sunday"],
                    opens: "11:00",
                    closes: "22:00",
                },
            ],
        },
        {
            id: 6,
            name: "とんかつとんＱふじみ野店",
            slug: "fujimino",
            url: "http://ton-q.com/shop/fujimino",
            "@context": "http://schema.org",
            "@type": "Restaurant",
            servesCuisine: "とんかつ",
            menu: "http://ton-q.com/menu/",
            mainImage: [
                "photo-fujimino-l.webp",
                "photo-fujimino-m.webp",
                "photo-fujimino-s.webp",
            ],
            //"image": "http://ton-q.com/shop/imgae/photo_tsukubas.jpg",
            description: "とんかつとんＱふじみ野店は、平成２３年に農林水産大臣賞を受賞した「やまと豚」のとんかつを中心に、お膳の５品（とんかつ・キャベツ・ご飯・味噌汁・お新香）にこだわるとんかつ専門店。沢山の笑顔と元気でお客様をおもてなしと、本当に美味しい料理で、また絶対来たくなるお店作りを目指しています。",
            telephone: "049-278-1977",
            address: {
                "@type": "PostalAddress",
                streetAddress: "鶴ケ舞３丁目７−５",
                addressLocality: "ふじみ野市",
                addressRegion: "埼玉県",
                postalCode: "356-0041",
                addressCountry: "JP",
            },
            access: "国道254号上り道路沿いの「上福岡駅西口入り口」交差点付近",
            open: {
                weekday: ["11:00 ~ 15:00(L.O.14:30)", "17:00 ~ 21:00(L.O.20:30)"],
                holiday: "11:00 ~ 22:00(L.O.21:30)",
                lunchTime: "平日・土曜11:00 ~ 15:00",
            },
            closeDays: `基本火曜日`,
            sheet: "80席（座敷席あり）",
            payment: "現金・クレジットカード・Paypay",
            privateRoom: "無し",
            parking: "有り",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.1889580673696!2d139.50392167884397!3d35.8688859802481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018dc98c14c89e9%3A0x57af8b70e90d287a!2z44Go44KT44GL44Gk44Go44KTUSDjgbXjgZjjgb_ph47lupc!5e0!3m2!1sja!2sjp!4v1488168684905",
            sns: {},
            calendar: true,
            close: [{
                    month: 8,
                    day: [4, 10, 18, 25],
                },
                { month: 9, day: [6, 13, 20, 27] },
            ],
            priceRange: "¥1,000 ~ ¥2,500",
            geo: {
                "@type": "GeoCoordinates",
                latitude: 35.86888555434468,
                longitude: 139.50610958276587,
            },
            openingHoursSpecification: [{
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    opens: "11:00",
                    closes: "15:00",
                },
                {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    opens: "17:00",
                    closes: "21:00",
                },
                {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Saturday", "Sunday"],
                    opens: "11:00",
                    closes: "22:00",
                },
            ],
        },
        {
            id: 7,
            name: "とんかつとんＱイーアスつくば店",
            slug: "iias",
            url: "http://ton-q.com/shop/iias",
            "@context": "http://schema.org",
            "@type": "Restaurant",
            servesCuisine: "とんかつ",
            menu: "http://ton-q.com/menu/",
            mainImage: [
                "photo-iias-l.webp",
                "photo-iias-m.webp",
                "photo-iias-s.webp",
            ],
            //"image": "http://ton-q.com/shop/imgae/photo_tsukubas.jpg",
            description: "ショッピングモールのイーアスつくばの中にあるとんかつとんＱイーアスつくば店は、手揚げが自慢のとんかつ専門店。手揚げでしかできない絶妙な火加減で揚げる「やまと豚」のとんかつを中心に、お膳の５品（とんかつ・キャベツ・ご飯・味噌汁・お新香）全てにこだわります。",
            telephone: "029-828-8109",
            address: {
                "@type": "PostalAddress",
                streetAddress: "研究学園５丁目１９",
                addressLocality: "つくば市",
                addressRegion: "茨城県",
                postalCode: "305-0817",
                addressCountry: "JP",
            },
            access: "つくばTX研究学園駅より徒歩5分イーアスつくば一階",
            open: {
                weekday: "11:00 ~ 22:00(L.O.21:30)",
                holiday: "11:00 ~ 22:00(L.O.21:30)",
                lunchTime: "平日11:00 ~ 15:00",
            },
            closeDays: "年中無休",
            sheet: "67席",
            payment: "現金・クレジットカード・Paypay",
            privateRoom: "無し",
            parking: "有り(施設共有)",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.281379987049!2d140.08236367860573!3d36.08662831533864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60220b94582b14d3%3A0xb1ea00cea1be20f6!2z44Go44KT44GL44Gk44Go44KTUSDjgqTjg7zjgqLjgrnjgaTjgY_jgbDlupc!5e0!3m2!1sja!2sjp!4v1488172221419",
            sns: {},
            calendar: false,
            close: [],
            priceRange: "¥1,000 ~ ¥2,500",
            geo: {
                "@type": "GeoCoordinates",
                latitude: 36.086120463241166,
                longitude: 140.083875361318,
            },
            openinghours: "Mo, Tu, We, Th, Fr, Sa, Su 11:00-22:00",
        },
        {
            id: 8,
            name: "とんかつとんＱ柏髙島屋ステーションモール店",
            slug: "kashiwa",
            url: "http://ton-q.com/shop/kashiwa",
            "@context": "http://schema.org",
            "@type": "Restaurant",
            servesCuisine: "とんかつ",
            menu: "http://ton-q.com/menu/",
            mainImage: [
                "photo-kashiwa-l.webp",
                "photo-kashiwa-m.webp",
                "photo-kashiwa-s.webp",
            ],
            //"image": "http://ton-q.com/shop/imgae/photo_tsukubas.jpg",
            description: "JR常磐線・柏駅の駅ビルにあるとんかつとんQ柏高島屋ステーションモール店は、職人の手揚げでしかできない絶妙な火加減で揚げるとんかつが自慢の「やまと豚」専門店。平成23年に農林水産大臣賞を受賞した「やまと豚」のとんかつを中心に、お膳の五品（とんかつ・キャベツ・ご飯・味噌汁・お新香）全てににこだわります。",
            telephone: "04-7148-2029",
            address: {
                "@type": "PostalAddress",
                streetAddress: "末広町１丁目１−１",
                addressLocality: "柏市",
                addressRegion: "千葉県",
                postalCode: "277-8550",
                addressCountry: "JP",
            },
            access: "JR線・東武野田線「柏駅」直結 新館専門店11階",
            open: {
                weekday: "11:00 ~ 21:00(L.O.20:30)",
                holiday: "11:00 ~ 21:00(L.O.20:30)",
                lunchTime: "平日・土曜11:00 ~ 15:00",
            },
            closeDays: "年中無休(元旦を除く)",
            sheet: "67席",
            payment: "現金・クレジットカード・Paypay",
            privateRoom: "無し",
            parking: "有り(施設共有)",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.463108907215!2d139.96764587859752!3d35.86216632773426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60189ce6e4cd3ee3%3A0xc49d1ba6071f7ad7!2z44Go44KT44GL44GkIOOBqOOCk1Eg5p-P6auZ5bO25bGL44K544OG44O844K344On44Oz44Oi44O844Or5bqX!5e0!3m2!1sja!2sjp!4v1488172778099",
            sns: {},
            calendar: false,
            close: [],
            priceRange: "¥1,500 ~ ¥3,000",
            geo: {
                "@type": "GeoCoordinates",
                latitude: 35.86217009889196,
                longitude: 139.96981218309492,
            },
            openinghours: "Mo, Tu, We, Th, Fr, Sa, Su 11:00-21:00",
        },
    ],
});

const getters = {
    getShopData: (state) => (id) => {
        return state.shopData.find((item) => item.id === id)
    },
    getShop: (state) => state.shopData,
    getShopLabels: (state) => {
        let data = []
        state.shopData.forEach((item) => {
            let obj = { id: item.id, name: item.name, slug: item.slug }
            data.push(obj)
        })

        return data
    },
    getSlugs: (state) => {
        let data = []
        state.shopData.forEach((item) => {
            data.push(item.slug)
        })

        return data
    }
};

export default {
    namespaced: true,
    state,
    getters,
};