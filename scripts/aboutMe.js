import { constants } from './constants.js'


export function createAboutMeElements(content) {
    populateAboutMe(content)
}

//About me
function populateAboutMe(content) {
    let aboutMeComponent = document.querySelector(constants.aboutMeSectionId);
    let aboutMeImageElement = aboutMeComponent.querySelector(constants.aboutMeImageId);
    aboutMeImageElement.src = content.aboutMe.image;
    aboutMeImageElement.alt = content.aboutMe.name;

    let aboutMeNameElement = aboutMeComponent.querySelector(constants.aboutMePersonNameId);
    aboutMeNameElement.innerHTML = content.aboutMe.name;

    let aboutMeAgeElement = aboutMeComponent.querySelector(constants.aboutMePersonAgeId);
    aboutMeAgeElement.innerHTML = `<span class="bold">${content.aboutMe.ageLabel}:</span> ${content.aboutMe.age}`;

    let aboutMeBodyElement = aboutMeComponent.querySelector(constants.aboutMeBodyId);
    aboutMeBodyElement.children[1].innerHTML = content.aboutMe.description;

    let aboutMeTitleElement = aboutMeBodyElement.querySelector(constants.aboutMeTitleId);
    aboutMeTitleElement.innerHTML = content.aboutMe.categoryName;
}