import React from 'react'


const footerlinks = [
    {
        title: "Shop and Learn",
        links: [
            "Store",
            "Mac",
            "iPad",
            "iPhone",
            "Watch",
            "AirPods",
            "TV & Home",
            "AirTag",
            "Accessories",
            "Gift Cards",
        ],
    },
    {
        title: "Apple Wallet",
        links: ["Wallet"],
    },
    {
        title: "Account",
        links: [
            "Manage Your Apple Account",
            "Apple Store Account",
            "iCloud.com",
        ],
    },
    {
        title: "Entertainment",
        links: [
            "Apple One",
            "Apple TV+",
            "Apple Music",
            "Apple Arcade",
            "Apple Podcasts",
            "Apple Books",
            "App Store",
        ],
    },
    {
        title: "Apple Store",
        links: [
            "Find a Store",
            "Genius Bar",
            "Today at Apple",
            "Group Reservations",
            "Apple Camp",
            "Apple Trade In",
            "Ways to Buy",
            "Recycling Programme",
            "Order Status",
            "Shopping Help",
        ],
    },
    {
        title: "For Business",
        links: ["Apple and Business", "Shop for Business"],
    },
    {
        title: "For Education",
        links: [
            "Apple and Education",
            "Shop for Education",
            "Shop for University",
        ],
    },
    {
        title: "For Healthcare",
        links: [
            "Apple in Healthcare",
            "Mac in Healthcare",
            "Health on Apple Watch",
        ],
    },
    {
        title: "Apple Values",
        links: [
            "Accessibility",
            "Education",
            "Environment",
            "Privacy",
            "Supply Chain Innovation",
        ],
    },
    {
        title: "About Apple",
        links: [
            "Newsroom",
            "Apple Leadership",
            "Career Opportunities",
            "Investors",
            "Ethics & Compliance",
            "Events",
            "Contact Apple",
        ],
    },
];



const Footer = () => {
    return (

        <footer className='bg-white flex justify-center p-3'>

            <div className='container text-xs w-screen md:w-3/4
            '>
                <ul className='flex flex-col gap-3 text-gray-500'>
                    <li>◊No Cost EMIis available with the purchase of an <a href="" className='underline'>eligible product </a> made using qualifying cards on 3- or 6-month tenures from most leading card issuers. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer’s terms and conditions. Minimum order spend applies as per your card issuer’s threshold. No Cost EMI is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice. <a href="" className='underline'>Terms apply.</a>
                    </li>

                    <li>‡Instant cashback is available with the purchase of an <a href="" className='underline'>eligible product.</a>with qualifying American Express, Axis Bank and ICICI Bank cards only. Minimum transaction value of ₹10001.00 applies. Click here to see instant cashback amounts and eligible devices. Instant cashback is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuer. Total transaction value is calculated after any trade-in credit or eligible discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant cashback being recalculated, and any refund may be adjusted to account for instant cashback clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply. Instant cashback is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant cashback.</li>
                    <li>*Apple Education Pricing is available to current and newly accepted college students and their parents, as well as teachers and staff at all levels. For more information, visit <a href="" className='underline'>apple.com/in-edu/store. </a></li>
                    <li>1. Qualified Purchasers can receive Promotion Savings when they purchase an eligible Mac or iPad with their choice of a Promotion Product at a Qualifying Location. Customers will be charged for all items in their cart, including the Promotion Product. Only one Promotion Product can be obtained per eligible Mac or iPad per Qualified Purchaser. The offer is subject to availability, while supplies last. View full terms and conditions of offer here.</li>
                    <li>2. Available in two models: AirPods 4 and AirPods 4 with Active Noise Cancellation.
                    </li>
                    <li>Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and Mac models with M1 and later, with Siri and device language set to the same supported language, as part of an iOS 18, iPadOS 18 and macOS Sequoia software update. Supported languages include English, French, German, Italian, Portuguese (Brazil), Spanish, Japanese, Korean and Chinese (Simplified). More languages are coming over the course of the year, including Vietnamese. Some features may not be available in all regions or languages.</li>
                    <li>A subscription is required for Apple TV+</li>
                    <li>Features are subject to change. Some features, applications and services may not be available in all regions or all languages.</li>


                </ul>

                <hr className='border-t-1 border-gray-500 mt-5' />


                {/* Footer Links*/}
                <div className="mt-10 grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                    {footerlinks.map((section, idx) => (
                        <div key={idx}>
                            <h3 className="font-semibold text-black">{section.title}</h3>
                            <ul className="mt-2 space-y-1">
                                {section.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        <a
                                            href="#"
                                            className="text-gray-500 hover:underline hover:text-black"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}



                </div>

                <p className='text-gray-500'>More ways to shop: <a href="" className='text-blue-600 underline'> Find an Apple Store </a> or <a href="" className='text-blue-600 underline'>other retailer </a> near you. Or call <a href="" className='text-blue-600 underline'> 1121 1321 201.</a></p>


                <hr className='border-t-1 border-gray-500 mt-5' />

                <div className='flex justify-between mx-4 mt-4'>
                    <div className='flex gap-8 text-gray-500'><p>Copyrights &copy;2025 Arunkumar Inc, All Rights reserved. </p>
                        <ul className='flex space-x-3'>
                            <li className=' text-gray-500 hover:underline'>Privacy policy |</li>
                            <li className=' text-gray-500 hover:underline'>Terms of use |</li>
                            <li className=' text-gray-500 hover:underline'>Sales policy |</li>
                            <li className=' text-gray-500 hover:underline'>Legal |</li>
                            <li className=' text-gray-500 hover:underline'>Site map</li>
                        </ul>

                    </div>
                    <div>
                        <a href="" className=' text-gray-500 hover:underline'>India</a>
                    </div>



                </div>
            </div>






        </footer>
    )
}

export default Footer