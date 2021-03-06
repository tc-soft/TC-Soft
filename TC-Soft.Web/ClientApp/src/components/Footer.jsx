import React from 'react';
import { Link } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import useEventGA from './useEventGA';
import './Footer.scss';

function Footer() {
    return (
        <React.Fragment>
            <footer>
                <div className="social">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/tadeusz-ciszewski-475095191" target="_blank" rel="noopener noreferrer"
                                onClick={useEventGA("Social Media", "Linkedin")}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24"
                                    viewBox="0 0 256 256">

                                    <g className="iconLinkedinFill" >
                                        <rect className="iconLinkedinFill1" width="256" height="256" rx="20" />
                                        <path className="iconLinkedinFill2" d="M17.194 0C7.64179 0.955224 0.477612 8.59701 0 18.1493V237.373C0.477612 247.403 8.59701 256 19.1045 256H236.896C247.403 256 256 247.403 256 237.373V18.1493C256 8.59701 248.358 0.955224 239.284 0H17.194ZM75.9403 217.791H38.209V96H75.9403V217.791ZM57.3134 79.2836C44.8955 79.2836 34.8657 69.2537 34.8657 57.3134C34.8657 44.8955 44.8955 35.3433 56.8358 35.3433C69.2537 35.3433 79.2836 44.8955 79.2836 57.3134C79.2836 69.2537 69.2537 79.2836 57.3134 79.2836ZM218.269 217.791H180.06V158.567C180.06 144.239 180.06 126.09 160.478 126.09C140.896 126.09 137.552 141.373 137.552 157.612V217.791H99.8209V96H136.119V112.716H136.597C144.239 99.8209 158.09 92.1791 172.896 92.6567C211.104 92.6567 218.269 117.97 218.269 150.925V217.791Z" />
                                    </g>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/tc-soft" target="_blank" rel="noopener noreferrer"
                                onClick={useEventGA("Social Media", "GitHub")}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24"
                                    viewBox="0 0 496 512">

                                    <g className="iconGitHUBFill" >
                                        <path className="iconGitHUBFill1"
                                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6
                                            0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2
                                            1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2
                                            2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6
                                            4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8
                                            205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70
                                            15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9
                                            2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1
                                            16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3
                                            2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9
                                            62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7
                                            25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9
                                            17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8
                                            496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1
                                            3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7
                                            1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4
                                            35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6
                                            1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                                        </path>
                                    </g>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/TC-Soft-100264435115387" target="_blank" rel="noopener noreferrer"
                                onClick={useEventGA("Social Media", "Facebook")}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24"
                                    viewBox="0 0 256 256">

                                    <g className="iconFacebookFill" >
                                        <path className="iconFacebookFill1"
                                            d="M256 128c0,-71 -57,-128 -128,-128 -71,0 -128,57 -128,128 0,64 47,117 108,126l0 -89 -32 0 0 -37 32 0 0 -28c0,-32 19,-50 48,-50 14,0 29,2 29,2l0 32 -16 0c-16,0 -21,10 -21,20l0 24 36 0 -6 37 -30 0 0 89c61,-9 108,-62 108,-126z" />
                                        <path className="iconFacebookFill2"
                                            d="M178 165l6 -37 -36 0 0 -24c0,-10 5,-20 21,-20l16 0 0 -32c0,0 -15,-2 -29,-2 -29,0 -48,18 -48,50l0 28 -32 0 0 37 32 0 0 89c7,1 13,2 20,2 7,0 13,-1 20,-2l0 -89 30 0z" />
                                    </g>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCVWl6FMlld06pQAqAmM-FHA?view_as=subscriber" target="_blank" rel="noopener noreferrer"
                                onClick={useEventGA("Social Media", "Youtube")}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="20"
                                    viewBox="0 0 363 256">

                                    <g className="iconYoutubeFill">
                                        <path className="iconYoutubeFill1" d="M355 40c-4,-16 -16,-28 -32,-32 -28,-8 -141,-8 -141,-8 0,0 -114,0 -142,8 -16,4 -28,16 -32,32 -8,28 -8,88 -8,88 0,0 0,59 8,88 4,16 16,28 32,32 28,8 142,8 142,8 0,0 113,0 141,-8 16,-4 28,-16 32,-32 8,-29 8,-88 8,-88 0,0 0,-60 -8,-88z" />
                                        <polygon className="iconYoutubeFill2" points="144,182 239,128 144,74 " />
                                    </g>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:office@tc-soft.pl?subject=Kontakt%20WEB&body=Napisz%20coś" target="_blank" rel="noopener noreferrer"
                                onClick={useEventGA("Social Media", "E-mail")}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="20"
                                    viewBox="0 0 363 256">

                                    <g className="iconMailFill">
                                        <rect className="iconMailFill1" y="39" width="363" height="164" />
                                        <path className="iconMailFill2" d="M356.123 84.5333C358.888 82.4667 363 84.4 363 87.6667V224C363 241.667 347.757 256 328.969 256H34.0312C15.2432 256 0 241.667 0 224V87.7333C0 84.4 4.04121 82.5333 6.87715 84.6C22.7584 96.2 43.8152 110.933 116.132 160.333C131.091 170.6 156.331 192.2 181.5 192.067C206.811 192.267 232.547 170.2 246.939 160.333C319.256 110.933 340.242 96.1333 356.123 84.5333ZM181.5 170.667C197.948 170.933 221.629 151.2 233.539 143.067C327.622 78.8667 334.782 73.2667 356.477 57.2667C360.589 54.2667 363 49.6 363 44.6667V32C363 14.3333 347.757 0 328.969 0H34.0312C15.2432 0 0 14.3333 0 32V44.6667C0 49.6 2.41055 54.2 6.52266 57.2667C28.2176 73.2 35.3783 78.8667 129.461 143.067C141.371 151.2 165.052 170.933 181.5 170.667Z" fill="black" />
                                    </g>
                                </svg>
                            </a>
                        </li>
                    </ul >
                </div >

                <div className="legal">
                    <ul>
                        <li>
                            <a href="#top">Hosting by
                            <svg
                                    height="15"
                                    viewBox="0 0 105 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">

                                    <path d="M17.9183 28.3979C22.8944 27.5188 27.0044 26.7914 27.0516 26.7814L27.1375 26.7632L22.4395 21.1751C19.8556 18.1017 17.7415 15.5751 17.7415 15.5606C17.7415 15.533 22.5926 2.17427 22.6199 2.12675C22.629 2.11086 25.9303 7.81043 30.6224 15.9429C35.0152 23.5566 38.6369 29.8342 38.6706 29.893L38.7318 30L8.87077 29.9962L17.9183 28.3979ZM75.1751 27.0464C72.9024 26.9007 71.5805 25.6066 71.2303 23.1843C71.1371 22.5399 71.1367 22.5232 71.1272 18.3399L71.118 14.2911H73.1297L73.1376 18.2073C73.1447 21.7368 73.1492 22.1507 73.1829 22.399C73.3199 23.4066 73.5925 24.0843 74.0567 24.5707C74.4282 24.9599 74.8631 25.1879 75.4651 25.3088C75.7491 25.3659 76.557 25.366 76.816 25.309C77.4263 25.1747 77.9154 24.9092 78.3469 24.4778C78.8388 23.9862 79.2026 23.2886 79.3787 22.4998L79.438 22.234L79.4512 14.3354H81.505V26.7522H79.4724V25.7672C79.4724 25.0979 79.4651 24.7846 79.4495 24.7898C79.4369 24.794 79.3847 24.8738 79.3335 24.9672C78.9833 25.606 78.3998 26.1901 77.7604 26.542C76.9939 26.9638 76.2253 27.1138 75.1751 27.0464ZM98.2434 27.0364C97.4411 26.9761 96.5963 26.7003 95.9059 26.2732C94.4507 25.373 93.5896 23.8892 93.3375 21.8473C93.2502 21.1407 93.2398 20.1916 93.3126 19.5912C93.4752 18.2496 94.0024 16.9326 94.7531 15.9924C94.9455 15.7513 95.3821 15.3148 95.6231 15.1223C96.274 14.6027 97.0353 14.2393 97.8436 14.0625C98.3146 13.9594 99.1439 13.9111 99.6443 13.9574C100.901 14.0739 102.053 14.6657 102.836 15.5972C103.632 16.5436 104.069 17.8659 104.125 19.4943C104.134 19.7495 104.136 20.1969 104.13 20.4885L104.118 21.0188L95.3138 21.0299V21.2264C95.3138 21.8244 95.4592 22.5055 95.7106 23.0851C95.9273 23.5848 96.3005 24.1306 96.606 24.3947C97.2323 24.9361 97.999 25.2603 98.8378 25.3383C99.1489 25.3672 99.9416 25.3367 100.296 25.2823C101.307 25.1269 102.269 24.7302 103.045 24.1481C103.137 24.0796 103.224 24.0156 103.24 24.0059C103.262 23.9917 103.268 24.1706 103.267 24.9228L103.266 25.8574L103.058 25.986C102.18 26.5293 101.174 26.8781 100.108 27.0087C99.7903 27.0476 98.6236 27.065 98.2434 27.0364ZM102.075 19.1542C102.075 18.1524 101.652 17.0396 101.055 16.4666C100.629 16.0576 100.113 15.8077 99.5007 15.7128C99.2108 15.6679 98.5999 15.6852 98.2943 15.7469C97.6482 15.8775 97.1139 16.1615 96.6478 16.622C96.1573 17.1067 95.7895 17.6954 95.5582 18.3662C95.4751 18.6074 95.3778 19.0034 95.3476 19.2236L95.3332 19.3286H102.075V19.1542ZM42.359 26.7246C42.3641 26.7094 43.859 22.7822 45.681 17.9975L48.9936 9.29801L51.1223 9.29787L51.2106 9.52434C51.4805 10.2164 57.8423 26.7333 57.8423 26.7419C57.8423 26.7475 57.3327 26.7521 56.71 26.752L55.5776 26.7518L53.7438 21.8694L46.3601 21.8693L46.328 21.9522C46.3103 21.9977 45.9186 23.0962 45.4574 24.3932L44.619 26.7513L43.4843 26.7517C42.5861 26.752 42.3516 26.7464 42.359 26.7246ZM53.07 20.0064C53.07 20.0026 52.4529 18.3298 51.6988 16.2891C50.2879 12.4714 50.2089 12.2417 50.0975 11.6288C50.0452 11.3414 50.0187 11.3334 49.9877 11.5956C49.9655 11.7831 49.8694 12.2025 49.7952 12.4352C49.7584 12.5507 49.1231 14.2945 48.3833 16.3104C47.6435 18.3263 47.0383 19.9842 47.0383 19.9946C47.0383 20.005 48.3954 20.0135 50.0541 20.0135C51.7128 20.0135 53.07 20.0103 53.07 20.0064ZM58.5272 26.1163L65.8837 16.0034L59.2232 15.9813L59.2116 14.2911H68.8451V14.862L65.1665 19.946C63.1432 22.7422 61.4878 25.0347 61.4878 25.0405C61.4878 25.0462 63.1233 25.0509 65.1223 25.0509H68.7568V26.7522H58.5272V26.1163ZM85.5188 26.7374C85.5107 26.7293 85.5041 23.9256 85.5041 20.5069V14.2911H87.5146V15.5726C87.5146 16.2774 87.5232 16.854 87.5337 16.854C87.5441 16.854 87.5931 16.7387 87.6424 16.5977C87.8684 15.9515 88.2604 15.3478 88.7654 14.8679C89.2203 14.4356 89.7402 14.1771 90.3537 14.0782C90.5261 14.0504 90.6719 14.0451 91.0165 14.0541C91.4494 14.0654 91.6757 14.097 91.939 14.1831L92.0218 14.2102V16.2971L91.7843 16.1782C91.3647 15.9682 90.9508 15.8851 90.4531 15.911C90.1293 15.9278 89.9167 15.9694 89.6577 16.0666C89.125 16.2665 88.6929 16.6194 88.3909 17.1011C87.9538 17.7985 87.642 18.695 87.5501 19.5188C87.5336 19.6667 87.5238 20.8709 87.5199 23.2447L87.5142 26.7522H86.5239C85.9792 26.7522 85.5269 26.7455 85.5188 26.7374ZM0 26.6938C0 26.6859 2.21366 22.8432 4.91924 18.1544L9.83848 9.62926L15.5713 4.81828C18.7243 2.17224 21.3126 0.00406292 21.323 0.00010869C21.3333 -0.00384476 21.2919 0.100549 21.2308 0.232096C21.1697 0.363644 18.3685 6.37205 15.0058 13.5841L8.89179 26.6969L4.44589 26.7025C2.00065 26.7056 0 26.7017 0 26.6938Z"
                                        fill="#0089D6" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <Link to="/gdpr">RODO</Link>
                        </li>
                        <li>
                            <Link to="/cookies">Polityka cookies</Link>
                        </li>

                        <li>&copy; 2021 TC-Soft / Anivers Design</li>
                    </ul>
                </div >
            </footer >
            <CookieConsent
                cookieName="TC-Soft.PL"
                location="bottom"
                buttonText="Zgadzam się"

                style={{ 
                    background: "#eff6fd",
                    opacity: 0.9,
                    color: "black",
                    fontSize: "0.9rem"
                 }}

                buttonStyle={{
                    background: "#00bb00",
                    border: "0",
                    borderRadius: "0px",
                    boxShadow: "none",
                    color: "#fff",
                    cursor: "pointer",
                    flex: "0 0 auto",
                    padding: "5px 10px",
                    margin: "15px",
                    fontSize: "1rem"
                  }}

                expires={365}
            >
                Serwis wykorzystuje pliki cookies. 
                Możesz je wyłączyć w ustawieniach przeglądarki. 
                Dalsze korzystanie z witryny bez zmiany ustawień oznacza wyrażenie zgody 
                na korzystanie z plików cookies. Więcej informacji dostępnych jest w&nbsp;
                <Link 
                    to="/cookies"
                    style={{ 
                        textDecoration: "none",
                        fontSize: "0.9rem"
                    }}
                >
                    <strong>Polityce plików cookies.</strong>
                </Link>
            </CookieConsent>
        </React.Fragment >
    );
}

export default Footer;