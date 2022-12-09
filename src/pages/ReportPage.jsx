import AppLayout from '../components/layouts/AppLayout';
import KcalPage from '../components/report/KcalPage';
import ReportHeader from '../components/report/ReportHeader';

const ReportPage = () => {
  return (
    <AppLayout>
      <ReportHeader />
      <KcalPage />
    </AppLayout>
  );
};

export default ReportPage;
