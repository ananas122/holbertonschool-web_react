// task_1/dashboard/src/utils.js

// Fonction pour obtenir l'année actuelle
export function getFullYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
}

// Fonction pour obtenir le texte de pied de page en fonction de l'index
export function getFooterCopy(isIndex) {
    if (isIndex) {
        return "Holberton School";
    } else {
        return "Holberton School main dashboard";
    }
}
