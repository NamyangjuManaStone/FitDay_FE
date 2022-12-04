import { KcalPageContainer } from './KcalPage.styled';

const KcalPage = () => {
  return (
    <KcalPageContainer>
      <div className="kcal-report">
        칼로리 리포트
        <div className="kcal-report__summary">요약</div>
      </div>
      <div className="kcal-report">
        영양분 리포트
        <div className="kcal-report__summary">요약</div>
      </div>
    </KcalPageContainer>
  );
};

export default KcalPage;
