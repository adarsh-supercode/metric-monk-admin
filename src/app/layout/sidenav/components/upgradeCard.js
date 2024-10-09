import React from 'react';
import styles from '../css/upgradecard.module.css';
// import App from 'next/app';

function UpgradeCard() {
  const progressPercentage = 70; 

  return (
    <div className={styles.upgradeCard}>
      <div className={styles.upgradePlan}>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
        <g clipPath="url(#clip0_269_312)">
        <rect y="0.5" width="32" height="32" rx="6" fill="#7277F6"/>
        <g filter="url(#filter0_d_269_312)">
        <path d="M20.9996 9.8335C21.1251 9.8335 21.2489 9.86183 21.3619 9.91637C21.4749 9.97091 21.5741 10.0503 21.6521 10.1485L21.7138 10.2385L24.2138 14.4052C24.2956 14.5418 24.3366 14.699 24.3319 14.8582C24.3272 15.0174 24.2769 15.172 24.1871 15.3035L24.1204 15.3893L17.0121 23.3335C16.8801 23.4682 16.7226 23.5751 16.5487 23.6481C16.3748 23.7211 16.1882 23.7586 15.9996 23.7585C15.6663 23.7585 15.3454 23.6418 15.0746 23.411L14.9621 23.306L7.87877 15.3893C7.77221 15.2704 7.70205 15.1234 7.67664 14.9658C7.65123 14.8081 7.67164 14.6465 7.73544 14.5002L7.78544 14.4043L10.2963 10.2193L10.3496 10.1443C10.3878 10.0969 10.4311 10.0538 10.4788 10.016L10.5529 9.96266L10.6263 9.921L10.6679 9.90183L10.7179 9.881L10.8088 9.85433L10.9021 9.83766L10.9996 9.8335H20.9996ZM13.5946 13.1193C13.4052 13.0059 13.1784 12.9723 12.9642 13.0259C12.75 13.0794 12.5658 13.2159 12.4521 13.4052L11.9521 14.2385L11.9021 14.3352C11.8383 14.4822 11.8183 14.6446 11.8445 14.8027C11.8706 14.9609 11.9419 15.1081 12.0496 15.2268L13.7163 17.0602L13.7913 17.1335C13.9455 17.2655 14.1427 17.3366 14.3457 17.3336C14.5487 17.3305 14.7436 17.2534 14.8938 17.1168L14.9663 17.0418C15.0983 16.8876 15.1694 16.6904 15.1663 16.4874C15.1633 16.2844 15.0862 16.0895 14.9496 15.9393L13.6988 14.5643L13.8804 14.2618L13.9263 14.176C14.01 13.9898 14.0225 13.7794 13.9614 13.5846C13.9002 13.3898 13.7697 13.2243 13.5946 13.1193Z" fill="url(#paint0_radial_269_312)" shapeRendering="crispEdges"/>
        <path d="M20.9996 9.8335C21.1251 9.8335 21.2489 9.86183 21.3619 9.91637C21.4749 9.97091 21.5741 10.0503 21.6521 10.1485L21.7138 10.2385L24.2138 14.4052C24.2956 14.5418 24.3366 14.699 24.3319 14.8582C24.3272 15.0174 24.2769 15.172 24.1871 15.3035L24.1204 15.3893L17.0121 23.3335C16.8801 23.4682 16.7226 23.5751 16.5487 23.6481C16.3748 23.7211 16.1882 23.7586 15.9996 23.7585C15.6663 23.7585 15.3454 23.6418 15.0746 23.411L14.9621 23.306L7.87877 15.3893C7.77221 15.2704 7.70205 15.1234 7.67664 14.9658C7.65123 14.8081 7.67164 14.6465 7.73544 14.5002L7.78544 14.4043L10.2963 10.2193L10.3496 10.1443C10.3878 10.0969 10.4311 10.0538 10.4788 10.016L10.5529 9.96266L10.6263 9.921L10.6679 9.90183L10.7179 9.881L10.8088 9.85433L10.9021 9.83766L10.9996 9.8335H20.9996ZM13.5946 13.1193C13.4052 13.0059 13.1784 12.9723 12.9642 13.0259C12.75 13.0794 12.5658 13.2159 12.4521 13.4052L11.9521 14.2385L11.9021 14.3352C11.8383 14.4822 11.8183 14.6446 11.8445 14.8027C11.8706 14.9609 11.9419 15.1081 12.0496 15.2268L13.7163 17.0602L13.7913 17.1335C13.9455 17.2655 14.1427 17.3366 14.3457 17.3336C14.5487 17.3305 14.7436 17.2534 14.8938 17.1168L14.9663 17.0418C15.0983 16.8876 15.1694 16.6904 15.1663 16.4874C15.1633 16.2844 15.0862 16.0895 14.9496 15.9393L13.6988 14.5643L13.8804 14.2618L13.9263 14.176C14.01 13.9898 14.0225 13.7794 13.9614 13.5846C13.9002 13.3898 13.7697 13.2243 13.5946 13.1193Z" stroke="url(#paint1_linear_269_312)" shapeRendering="crispEdges"/>
        </g>
        </g>
        <rect x="0.5" y="1" width="31" height="31" rx="5.5" stroke="white" strokeOpacity="0.4"/>
        <defs>
        <filter id="filter0_d_269_312" x="-0.333984" y="9.8335" width="24.666" height="23.9248" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-4" dy="6"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_269_312"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_269_312" result="shape"/>
        </filter>
        <radialGradient id="paint0_radial_269_312" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.9992 9.1704) rotate(90) scale(24.203 28.9676)">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="paint1_linear_269_312" x1="14.575" y1="20.2903" x2="19.5839" y2="10.5947" gradientUnits="userSpaceOnUse">
        <stop offset="0.425397" stopColor="white" stopOpacity="0"/>
        <stop offset="1" stopColor="white" stopOpacity="0.8"/>
        </linearGradient>
        <clipPath id="clip0_269_312">
        <rect y="0.5" width="32" height="32" rx="6" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        <span>
          <h3 className="heading-4 fw-600">Upgrade plan</h3>
          <p className="text-4 ">Your free trial will be over</p>
        </span>
      </div>
      <div className={styles.planProgress}>
        <div
          className={styles.progressBar}
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default UpgradeCard;