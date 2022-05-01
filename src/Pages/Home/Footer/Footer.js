import React from 'react';

const Footer = () => {
    const date = new Date();
    const today = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear();
    return (
        <div>
            <footer class="bg-gray-200 text-center lg:text-left">
                <div class="text-gray-700 text-center p-4">
                Copyright ©: Date :{today} / {month} / {year}
                </div>
            </footer>
        </div>
    );
};

export default Footer;