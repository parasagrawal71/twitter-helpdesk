import CryptoJS from "crypto-js";

/**
 * @function readCookie
 * @description Function to read any cookie value by its name and in decrpyted form
 */
export const readCookie = (cname) => {
  const cookieName = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < cookieArray.length; i++) {
    const cookieItem = cookieArray[i].trim();
    if (cookieItem.indexOf(cookieName) == 0) {
      const cookieValue = cookieItem.substring(
        cookieName.length,
        cookieItem.length
      );
      return decodeURIComponent(decryptValue(cookieValue));
    }
  }
};

/**
 * @function setCookie
 * @description Function to store any cookie in encrypted form
 */
export const setCookie = (cname, cvalue) => {
  const expiryTime = new Date(
    new Date().getTime() + 24 * 60 * 60 * 1000
  ).toUTCString();
  document.cookie = `${cname}=${encryptValue(
    encodeURIComponent(cvalue)
  )};expires=${expiryTime};path=/;`;
};

/**
 * @function deleteCookie
 * @description Function to delete any cookie by its name
 */
export const deleteCookie = (cname) => {
  const d = new Date();
  d.setTime(d.getTime() - 12 * 60 * 60 * 1000);
  document.cookie = `${cname}=;expires=${d.toUTCString()};path=/;`;
};

/**
 * @function encryptValue
 * @description Function to encrpyt
 */
const encryptValue = (value) => {
  const privateKey = "xasdasmasdDCYfU8bdasahtC1sdfdsfyXjxv543fdfwFH3f7z";
  const cipher = CryptoJS.AES.encrypt(value, privateKey).toString();
  return cipher;
};

/**
 * @function decryptValue
 * @description Function to decrypt
 */
const decryptValue = (value) => {
  const privateKey = "xasdasmasdDCYfU8bdasahtC1sdfdsfyXjxv543fdfwFH3f7z";
  if (!value) {
    return;
  }
  const bytes = CryptoJS.AES.decrypt(value, privateKey);
  if (bytes.sigBytes > 0) {
    try {
      const decryptedValue = bytes.toString(CryptoJS.enc.Utf8);
      return decryptedValue;
    } catch (e) {
      return null;
    }
  }
};
