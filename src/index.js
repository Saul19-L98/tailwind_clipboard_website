import './style.css';

import pagelogo from './assets/images/logo.svg';

import './assets/images/bg-header-desktop.png';

import computerImg from './assets/images/image-computer.png';
import devicesImg from './assets/images/image-devices.png';
import blacklistImg from './assets/images/icon-blacklist.svg';
import textImg from './assets/images/icon-text.svg';
import previewImg from './assets/images/icon-preview.svg';

import googleLogo from './assets/images/logo-google.png';
import imbLogo from './assets/images/logo-ibm.png';
import microsoftLogo from './assets/images/logo-microsoft.png';
import hpLogo from './assets/images/logo-hp.png';
import gvLogo from './assets/images/logo-vector-graphics.png';

import logo from './assets/images/logo.svg';

import facebookIcon from './assets/images/icon-facebook.svg';
import twitterIcon from './assets/images/icon-twitter.svg';
import instagramIcon from './assets/images/icon-instagram.svg';

const pageIcon = document.createElement('link');
pageIcon.rel = 'icon';
pageIcon.type = 'image/x-icon';
pageIcon.href = `${pagelogo}`;
document.querySelector('head').appendChild(pageIcon);

const templateInit = () => {
    const view = `
    <!-- Hero Section -->
    <section id="hero">
        <div class="section-container mb-40 pt-16">
            <svg 
            class="mx-auto my-16"
            width="125" 
            height="125" 
            xmlns="http://www.w3.org/2000/svg">
                <g stroke="#26BBA4" stroke-width="10" fill="none" fill-rule="evenodd">
                    <circle cx="62.5" cy="62.5" r="57.5"/>
                    <path d="M85.481 85.481c-12.692 12.692-33.27 12.692-45.962 0s-12.692-33.27 0-45.962 33.27-12.692 45.962 0" stroke-linecap="round"/>
                </g>
            </svg>

            <h3>
                A history of everything you copy
            </h3>

            <p class="section-content mb-10 text-xl">
                Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.
            </p>

            <!-- Button Container -->
            <div class="button-container">
                <a href="#" class="p-4 px-8 rounded-full shadow-lg bg-strongCyan duation-200 hover:opacity-80">
                    Download for iOS.
                </a>
                <a href="#" class="p-4 px-8 rounded-full shadow-lg bg-lightBlue duation-200 hover:opacity-80">
                    Download for Mac.
                </a>
            </div>
        </div>
    </section>

    <!-- Snippets Section -->
    <section id="snippets">
        <div class="max-w-6xl mx-auto text-center my-20 px-10">
            <h3 class="mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl">
                Keep track of your snippets
            </h3>
            <p class="line-height mb-24">
                Clipboard instantly stores my item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.
            </p>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features">
        <div class="section-container my-20">
            <div class="relative flex flex-col md:flex-row md:items-center md:spce-x-32">
                <!-- Image -->
                <div class="md:w-1/2">
                    <img src="${computerImg}" alt="#" class="ml-4 md:absolute top-0 right-[50%] md:w-[22rem] md:h-[17rem] lg:w-[42rem] lg:h-[32rem]">
                </div>

                <!-- Items Container -->
                <div class="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
                    <!-- Item 1 -->
                    <div>
                        <h5>
                            Quick Search
                        </h5>
                        <p class="max-w-md text-grayishBlue mx-auto">
                            Instantly saves and syncs snippets across all your devices.
                        </p>
                    </div>
                    <!-- Item 2 -->
                    <div>
                        <h5>
                            iCloud Sync
                        </h5>
                        <p class="max-w-md text-grayishBlue mx-auto">
                            Retrieve any snippets from the first moment you started using the app.
                        </p>
                    </div>
                    <!-- Item 3 -->
                    <div>
                        <h5>
                            Completely History
                        </h5>
                        <p class="max-w-md text-grayishBlue mx-auto">
                            Easily search your snippets by content, category, web address, application, and more.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Access Anywhere Section -->
    <section id="access">
        <div class="section-container my-20">
            <h3>Access Clipboard Anywhere</h3>
            <p class="section-content text-xl mb-24">
                Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.
            </p>
            <img src="${devicesImg}" alt="#" class="mx-auto">
        </div>
    </section>

    <!-- Supercharge Section -->
    <section class="supercharge">
        <div class="section-container my-20">
            <h3>Supercharge your workflow</h3>
            <p class="section-content text-xl mb-16">
                We've got the tools to boost your productivity.
            </p>
            <!-- Items Container -->
            <div class="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">

                <!-- Item 1 -->
                <div class="flex flex-col items-center space-y-5">
                    <img src="${blacklistImg}" alt="" class="mb-6">
                    <h5>Create Blacklists</h5>
                    <p class="max-w-md text-grayishBlue">
                        Easily search your snippets by content, category, web address, application, and more.
                    </p>
                </div>

                <!-- Item 2 -->
                <div class="flex flex-col items-center space-y-5">
                    <img src="${textImg}" alt="" class="mb-6">
                    <h5>Plain Text Snippets</h5>
                    <p class="max-w-md text-grayishBlue">
                        Remove unwanted formatting from copied text for a consistent look.
                    </p>
                </div>

                <!-- Item 3 -->
                <div class="flex flex-col items-center space-y-5">
                    <img src="${previewImg}" alt="" class="mb-6">
                    <h5>Sneak Preview</h5>
                    <p class="max-w-md text-grayishBlue">
                        Quick preview of all snippets on your Clipboard for easy access.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- References Section -->
    <section id="references">
        <div class="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
            <img src="${googleLogo}" alt="#">
            <img src="${imbLogo}" alt="#">
            <img src="${microsoftLogo}" alt="#">
            <img src="${hpLogo}" alt="#">
            <img src="${gvLogo}" alt="#">
        </div>
    </section>

    <!-- Botton CTA Section -->
    <section id="botton">
        <div class="section-container my-20">
            <h3>Clipboard for iOS and MacOS</h3>
            <p class="section-content text-xl mb-10">
                Availabe for free on the App Store. Download for Mac or iOS, sync with iClound and you're ready to start adding to your clipboard.
            </p>

            <!-- Button Container -->
            <div class="button-container">
                <a href="#" class="p-4 px-8 rounded-full shadow-lg bg-strongCyan duation-200 hover:opacity-80">
                    Download for iOS.
                </a>
                <a href="#" class="p-4 px-8 rounded-full shadow-lg bg-lightBlue duation-200 hover:opacity-80">
                    Download for Mac.
                </a>
            </div>
        </div>
    </section>

    <footer class="bg-gray-50">
        <div class="section-container">
            <div class="flex flex-col items-center justify-between md:flex-row">
                <!-- Image -->
                <img src="${logo}" alt="" class="scale-50">

                <!-- Container for Menus & Social -->
                <div class="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">

                    <!-- Menus -->
                    <div class="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">

                        <!-- Menus 1 -->
                        <div class="flex flex-col space-y-4 text-center md:text-left">
                            <div>
                                <a href="#" class="hover:text-strongCyan">
                                    FAQ
                                </a>
                            </div>
                            <div>
                                <a href="#" class="hover:text-strongCyan">
                                    Contact Us
                                </a>
                            </div>
                        </div>

                        <!-- Menus 2 -->
                        <div class="flex flex-col space-y-4 text-center md:text-left">
                            <div>
                                <a href="#" class="hover:text-strongCyan">
                                    Privacy Policy
                                </a>
                            </div>
                            <div>
                                <a href="#" class="hover:text-strongCyan">
                                    Press kit
                                </a>
                            </div>
                        </div>

                        <!-- Menus 3 -->
                        <div class="flex flex-col space-y-4 text-center md:text-left">
                            <div>
                                <a href="#" class="hover:text-strongCyan">
                                    Install
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Social Icons -->
                    <div class="flex justify-between w-32 py-1">
                        <a href="#"><img src="${facebookIcon}" alt="#" class="duration-200 ficon"></a>
                        <a href="#"><img src="${twitterIcon}" alt="#" class="duration-200 ficon"></a>
                        <a href="#"><img src="${instagramIcon}" alt="#" class="duration-200 ficon"></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `;
    return view;
}

(function App() {
    const main = null || document.querySelector('body');
    main.innerHTML = templateInit();
})();