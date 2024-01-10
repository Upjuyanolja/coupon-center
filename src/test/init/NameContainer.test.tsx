import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import '../matchMedia.mock';
import { NameContainer } from '@components/init/NameContainer';
import {
  ACCOMMODATION_NAME_MAX_LENGTH,
  ACCOMMODATION_NAME_MIN_LENGTH,
} from '@/constants/init/init-accommodation-registration';

describe('NameContainer', () => {
  test(`숙소명을 ${ACCOMMODATION_NAME_MIN_LENGTH}글자 미만 입력했을 때 에러메세지를 띄운다.`, () => {
    render(
      <BrowserRouter>
        <NameContainer header="숙소명" />
      </BrowserRouter>,
    );
    const inputAccommodationName = screen.getByTestId('input-name');
    act(() => {
      userEvent.type(
        inputAccommodationName,
        'A'.repeat(ACCOMMODATION_NAME_MIN_LENGTH - 1),
      );
    });
    const errorMessage = screen.getByTestId('error-input-name');
    expect(errorMessage).toBeInTheDocument();
  });

  test('숙소명에 한글,영어,숫자,공백 외 다른 문자를 입력했다.', () => {
    render(
      <BrowserRouter>
        <NameContainer header="숙소명" />
      </BrowserRouter>,
    );
    const inputAccommodationName = screen.getByTestId('input-name');
    act(() => {
      userEvent.type(inputAccommodationName, '!!');
    });
    const errorMessage = screen.getByTestId('error-input-name');
    expect(errorMessage).toBeInTheDocument();
  });

  test(`숙소명을 ${ACCOMMODATION_NAME_MAX_LENGTH}자를 초과해 입력했을 때 input을 막는다.`, () => {
    render(
      <BrowserRouter>
        <NameContainer header="숙소명" />
      </BrowserRouter>,
    );
    const inputAccommodationName = screen.getByTestId('input-name');
    act(() => {
      userEvent.type(
        inputAccommodationName,
        'a'.repeat(ACCOMMODATION_NAME_MAX_LENGTH + 1),
      );
    });

    expect(inputAccommodationName).toHaveAttribute('disabled');
  });
});
