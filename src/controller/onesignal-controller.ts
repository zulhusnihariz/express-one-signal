import { oneSignal } from '../config/onesignal';
import { catchAsync } from '../utils';

const sendNotifications = catchAsync(async (req, res) => {
  const { headings, contents, included_segments } = req.body;

  const response = await oneSignal.createNotification({
    headings: {
      en: headings,
    },
    contents: {
      en: contents,
    },
    included_segments,
  });

  res.send({
    success: true,
    message: 'Notification successfully created!',
    body: response.body,
  });
});

export default { sendNotifications };
