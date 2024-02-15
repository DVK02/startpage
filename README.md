<div align="center">
    <a href="https://github.com/DVK02/startpage">
        <img alt="logo" src="https://github.com/DVK02/startpage/tree/main/docs/static/assets" height=400>
    </a>
</div>

- [🔮 Overview](#-overview)
- [️⌨️ Keybindings](#️️-keybindings)
- [⚙️ Configuration Dialog](#️-configuration-dialog)
- [🔍 Search Dialog](#-search-dialog)
- [🖼 Available banners](#-available-banners)

## 🔮 Overview

This start page is based on the [dawn](https://github.com/b-coimbra/dawn) and [tartarus-startpage](https://github.com/AllJavi/tartarus-startpage), which has even more functionality.
I've tweaked the page's style a bit to match [catppuccin] style.

## ️⌨️ Keybindings

| Hotkey                                                         | Action        |
| -------------------------------------------------------------- | ------------- |
| <kbd>Numrow</kbd> \| <kbd>MouseWheel</kbd> \| <kbd>Click</kbd> | Switch tabs   |
| <kbd>s</kbd>                                                   | Search Dialog |
| <kbd>Esc</kbd>                                                 | Close Dialogs |

## ⚙️ Configuration Dialog

The default configuration file is [userconfig.js](userconfig.js), but you can change it in the configuration dialog. You can find more information about how the file works in the [original repository](https://github.com/b-coimbra/dawn). The available components are tabs, a clock, and weather.

Additionally, there's a new option called `fastlink` to set the link of the Pokéball button.

## 🔍 Search Dialog

The search dialog allows you to display a search bar with various search engines defined in the configuration. To select each one, you simply need to prefix the query with the corresponding `!<id>`.

By default, the defined search engines are:
- `!g`: google
- `!d`: duckduckgo
- `!y`: youtube
- `!r`: reddit
- `!p`: pinterest

## 🖼 Available banners

| cbg-2                                           | cbg-3                                           | cbg-4                                           | cbg-5                                           |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| <img src="src/img/banners/cbg-2.gif" width=175> | <img src="src/img/banners/cbg-3.gif" width=175> | <img src="src/img/banners/cbg-4.gif" width=175> | <img src="src/img/banners/cbg-5.gif" width=175> |

| cbg-6                                           | cbg-7                                           | cbg-8                                           | cbg-9                                           |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| <img src="src/img/banners/cbg-6.gif" width=175> | <img src="src/img/banners/cbg-7.gif" width=175> | <img src="src/img/banners/cbg-8.gif" width=175> | <img src="src/img/banners/cbg-9.gif" width=175> |

| cbg-10                                           | cbg-11                                           | cbg-12                                           | cbg-13                                           |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| <img src="src/img/banners/cbg-10.gif" width=175> | <img src="src/img/banners/cbg-11.gif" width=175> | <img src="src/img/banners/cbg-12.gif" width=175> | <img src="src/img/banners/cbg-13.gif" width=175> |


[dawn]: https://github.com/b-coimbra/dawn
[catppuccin]: https://github.com/catppuccin/catppuccin
[tartarus-startpage]:https://github.com/AllJavi/tartarus-startpage
