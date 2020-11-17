import React from 'react';
import { useSelector } from 'react-redux';
import Settings from '../../../components/main/settings/Settings';

const SettingsContainer = () => {
    const {settings} = useSelector(({settings})=>({
        settings:settings.settings
    }));

    return (
        <Settings
            settings={settings}
        />
    );
};

export default SettingsContainer;