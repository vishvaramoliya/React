import React, { useState } from 'react'

export default function File1() {

    const [name, setName] = useState("")

    const arr = [
        {
            name: "vivo" + "Vivo" + "VIVO",
            img: "https://m.media-amazon.com/images/I/61Coi7KOHiL._SL1200_.jpg",
            Product: "vivo Y18i (Space Black, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers |Without Charger",
            Price: "$9,999"
        },
        {
            name: "TECNO" + "tecno" + "Tecno",
            img: "https://m.media-amazon.com/images/I/61drAYmgY1L._AC_UY327_FMwebp_QL65_.jpg",
            Product: "TECNO POP 9 5G (Aurora Cloud, 4GB+128GB) | Segment's 1st 48MP Sony AI Camera | Segment's 1st 5G with NFC | D6300 5G Processor | 4+ Year Lag Free Fluency | 5000 mAh",
            Price: "$9,999"

        },
        {
            name: "POCO" + "poco" + "Poco",
            img: "https://m.media-amazon.com/images/I/51dGqSFNrDL._AC_UY327_FMwebp_QL65_.jpg",
            Product: "POCO M6 Pro 5G (128 GB) (6 GB RAM) (Power Black)",
            Price: "$9,999"

        },
        {
            name: 'Samsung' + "SAMSUNG" + "samsung",
            img: "https://m.media-amazon.com/images/I/81T3olLXpUL._AC_UY327_FMwebp_QL65_.jpg",
            Product: "Samsung Galaxy M05 (Mint Green, 4GB RAM, 64 GB Storage) | 50MP Dual Camera | Bigger 6.7 HD+ Display | 5000mAh Battery | 25W Fast Charging | 2 Gen OS Upgrade & 4 Year",
            Price: "$9,999"

        },
        {
            name: "realme" + "REALME" + "Realme",
            img: "https://m.media-amazon.com/images/I/71r0Ysx+oVL._AC_UY327_FMwebp_QL65_.jpg",
            Product: "realme NARZO N61 (Voyage Blue,6GB RAM+128GB Storage) 90Hz Eye Comfort Display | IP54 Dust & Water Resistance | 48-Month Fluency | Charger in The Box",
            Price: "$9,999"

        },
        {
            name: "Redmi" + "REDMI" + "redmi",
            img: "https://m.media-amazon.com/images/I/81Z1scL6HvL._AC_UY327_FMwebp_QL65_.jpg",
            Product: "Redmi 13C 5G (Startrail Silver, 4GB RAM, 128GB Storage) | MediaTek Dimensity 6100+ 5G | 90Hz Display",
            Price: "$9,999"

        },
        {
            name: "Redmi" + "REDMI" + "redmi",
            img: "https://m.media-amazon.com/images/I/71scmEdSC2L._AC_UY327_FMwebp_QL65_.jpg",
            Product: "Redmi 13C (Starfrost White, 6GB RAM, 128GB Storage) | Powered by 4G MediaTek Helio G85 | 90Hz Display | 50MP AI Triple Camera",
            Price: "$9,999"

        },
        {
            name: "realme" + "REALME" + "Realme",
            img: "https://m.media-amazon.com/images/I/71r0Ysx+oVL._AC_UY327_FMwebp_QL65_.jpg",
            Product: "realme NARZO N65 5G (Amber Gold 6GB RAM, 128GB Storage) India's 1st D6300 5G Chipset | Ultra Slim Design | 120Hz Eye Comfort Display | 50MP AI Camera| Charger in The Box 4.1 ",
            Price: "$9,999"

        },
        {
            name: 'Samsung' + "SAMSUNG" + "samsung",
            img: "https://m.media-amazon.com/images/I/81LJaRu0cZL._AC_UY327_FMwebp_QL65_.jpg",
            Product: "Samsung Galaxy M15 5G Prime Edition (Celestial Blue,4GB RAM,128GB Storage)| Super AMOLED Display| 50MP Triple Cam| 6000mAh Battery| MediaTek Dimensity 6100+| 4 Gen. OS Upgrade & 5 Year Security Update",
            Price: "$9,999"

        },
        {
            name: "vivo" + "Vivo" + "VIVO",
            img: "https://m.media-amazon.com/images/I/718RrecpkVL._AC_UY327_FMwebp_QL65_.jpg",
            Product: "vivo Y28s 5G (Vintage Red, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
            Price: "$9,999"

        },
        {
            name: "TECNO" + "tecno" + "Tecno",
            img: "https://m.media-amazon.com/images/I/61Xlq4i8LDL._AC_UY327_FMwebp_QL65_.jpg",
            Product: "TECNO POP 9 5G (Midnight Shadow, 4GB+64GB) | Segment's 1st 48MP Sony AI Camera | Segment's 1st 5G with NFC | D6300 5G Processor | 4+ Year Lag Free Fluency | 5000 mAh Battery | IR Remote | Dolby Atmos",
            Price: "$9,999"

        },
        {
            name: 'Samsung' + "SAMSUNG" + "samsung",
            img: "https://m.media-amazon.com/images/I/81LJaRu0cZL._AC_UY327_FMwebp_QL65_.jpg",
            Product: "Samsung Galaxy M15 5G Prime Edition (Stone Grey,6GB RAM,128GB Storage)| Super AMOLED Display| 50MP Triple Cam| 6000mAh Battery| MediaTek Dimensity 6100+| 4 Gen. OS Upgrade & 5 Year Security Update",
            Price: "$9,999"

        },
        {
            name: "Redmi" + "REDMI" + "redmi",
            img: "https://m.media-amazon.com/images/I/819sWoSDFRL._AC_UY327_FMwebp_QL65_.jpg",
            Product: "Redmi Note 13 Pro+ (Fusion White, 8GB RAM, 256GB Storage) | World's First Mediatek 7200 Ultra 5G | 200MP Hi-Res Camera | 1.5K Curved AMOLED | 120W HyperCharge",
            Price: "$9,999"

        },
        {
            name: "POCO" + "poco" + "Poco",
            img: "https://m.media-amazon.com/images/I/51Zjp5fq1EL._AC_UY327_FMwebp_QL65_.jpg",
            Product: "POCO C65 (Pastel Blue 4GB RAM 128GB Storage)",
            Price: "$9,999"

        },
        {
            name: "realme" + "REALME" + "Realme",
            img: "https://m.media-amazon.com/images/I/71AUNTs39lL._AC_UY327_FMwebp_QL65_.jpg",
            Product: "realme NARZO 70x 5G (Ice Blue, 6GB RAM,128GB Storage)|120Hz Ultra Smooth Display|Dimensity 6100+ 6nm 5G|50MP AI Camera|45W Charger in The Box ",
            Price: "$9,999"

        },
        {
            name: "vivo" + "Vivo" + "VIVO",
            img: "https://m.media-amazon.com/images/I/81m1SddJ6-L._AC_UY327_FMwebp_QL65_.jpg",
            Product: "Vivo T3x 5G (Crimson Bliss, 128 GB) (6 GB RAM)",
            Price: "$9,999"

        }
    ]

    const data = arr.filter((item) => item.name.includes(name))

    return (
        <div>
            <input type="text" placeholder='Vivo / Realme / Redmi / Poco / Samsung / Tecno..........' onChange={(e) => setName(e.target.value)} />

            {
                data &&
                data.map((e, i) => {
                    return <div className='box1 container' key={i}>
                            <div className="col">
                                <div className='img'>
                                    <img src={e.img} alt={e.name} />
                                </div>
                                <div className='text'>
                                    <p>{e.Product}</p>

                                    <p>Price: {e.Price}  </p>
                                </div>
                            </div>
                        </div>
                })
            }

        </div>
    )
}
