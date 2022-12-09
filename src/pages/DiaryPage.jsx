import DiaryHeader from '../components/diary/DiaryHeader';
import DiaryContent from '../components/diary/DiaryContent';
import AppLayout from '../components/layouts/AppLayout';

const Diarypage = () => {
  return (
    <AppLayout>
      <DiaryHeader />
      <hr />
      <DiaryContent />
    </AppLayout>
  );
};

export default Diarypage;
