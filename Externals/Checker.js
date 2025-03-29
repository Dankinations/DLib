(function (pluginName = 'UNKNOWN') {
    if (window.dlib) return;

    const key = 'dlib.required';
    if (!sessionStorage.getItem(key)) {
        sessionStorage.setItem(key, '1'); // Set instantly to prevent multiple alerts happening
        const message = "Ey so you don't have DLib enabled/downloaded, some userscripts use DLib and since you don't have DLib enabled, they  will break, please download/enable DLib :P";

        console.log(window.BootstrapDialog)

        BootstrapDialog.show({
            title: 'Oh No!',
            type: BootstrapDialog.TYPE_WARNING,
            message,
            buttons: [
                {
                    label: 'Download DLib',
                    cssClass: 'btn-primary',
                    action(dialog) {
                        open("https://github.com/Dankinations/DLib/releases/latest/download/DLib.user.js");
                    },
                },
                {
                    label: 'Proceed Anyways',
                    cssClass: 'btn-danger',
                    action(dialog) {
                        dialog.close();
                    },
                }],
        });

        // if (1 == 0) {
        //     console.log("hi")
        //     SimpleToast({
        //         title: 'Missing Requirements',
        //         text: message,
        //         footer: pluginName,
        //     });
        // } else if (window.BootstrapDialog) {
        //     BootstrapDialog.show({
        //         title: 'Oh No!',
        //         type: BootstrapDialog.TYPE_WARNING,
        //         message,
        //         buttons: [
        //             {
        //                 label: 'Download DLib',
        //                 cssClass: 'btn-primary',
        //                 action(dialog) {
        //                     open("https://github.com/Dankinations/DLib/releases/latest/download/DLib.user.js");
        //                 },
        //             },
        //             {
        //                 label: 'Proceed Anyways',
        //                 cssClass: 'btn-danger',
        //                 action(dialog) {
        //                     dialog.close();
        //                 },
        //             }],
        //     });
        // } else {
        //     sessionStorage.removeItem(key)
        // }
    }

    throw new Error(`${pluginName}: DLib required`);
})(this.GM_info?.script?.name);

// Based off @feildmaster's CheckerV2