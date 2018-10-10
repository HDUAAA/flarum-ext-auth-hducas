import app from 'flarum/app';

import CASSettingsModal from 'HDUAAA/auth/cas/components/CASSettingsModal';

app.initializers.add('HDUAAA-auth-cas', () => {
  app.extensionSettings['HDUAAA-auth-cas'] = () => app.modal.show(new CASSettingsModal());
});
