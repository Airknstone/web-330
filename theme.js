/* Title: theme.js
Author: Professor Krasso
Date: 01 06 2022
Modified By: Allan Trejo
Description: This script uses localStorage api to toggle set default Theme 
 */

//  expected output Storage {mode: 'light-theme', iconMode: 'fa-toggle-off', iconText: 'Light Mode'}
//
function setDefaultTheme ()
{
    localStorage.clear();
    const theme = localStorage.getItem( 'mode' ) || 'light-theme';
    const iconMode = localStorage.getItem( 'iconMode' ) || 'fa-toggle-off';
    const iconText = localStorage.getItem( 'iconText' ) || 'Light Mode';

    document.body.classList = theme;
    document.getElementById( 'icon-mode' ).classList.add( iconMode );
    document.getElementById( 'icon-text' ).innerHTML = iconText;

}

function setSelectedTheme()
{
    document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}