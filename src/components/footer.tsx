import React from "react";

export function Footer() {
    return (
        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a
                    href="#" className="hover:underline">Kreisliga WC3</a>. Alle Rechte vorbehalten </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="/about" className="mr-4 hover:underline md:mr-6 ">Über uns</a>
                    </li>
                    <li>
                        <a href="/privacy-policy" className="mr-4 hover:underline md:mr-6">Datenschutzbestimmungen</a>
                    </li>
                    <li>
                        <a href="/impressum" className="mr-4 hover:underline md:mr-6">Impressum</a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}

