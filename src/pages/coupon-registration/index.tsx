import { CouponApplier } from '@components/coupon-registration/coupon-applier';
import { CouponCard } from '@components/coupon-registration/coupon-card';
import { CouponPreview } from '@components/coupon-registration/coupon-preview';
import { CouponType } from '@components/coupon-registration/coupon-type';
import { Spacing } from '@components/spacing';
import { TextBox } from '@components/text-box';
import styled from 'styled-components';

export const CouponRegistration = () => {
  return (
    <Container>
      <StyledLeftWrap>
        <TextBox typography="h4" fontWeight="bold">
          쿠폰 만들기
        </TextBox>
        <Spacing space="8" />
        <CouponCard title="1. 쿠폰 유형 선택">
          <CouponType />
        </CouponCard>
        <Spacing space="32" />
        <CouponCard title="2. 적용 객실 선택">
          <CouponApplier />
        </CouponCard>
      </StyledLeftWrap>
      <div>
        <CouponPreview />
      </div>
    </Container>
  );
};

const Container = styled.section`
  padding: 32px 48px;
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;

const StyledLeftWrap = styled.div`
  width: 580px;
`;
