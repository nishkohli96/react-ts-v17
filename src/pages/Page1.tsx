import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Button from '@mui/material/Button';

import rootStore from 'mobx-store';
import { useAppSelector, useAppDispatch } from 'redux-store/hooks';
import { fetchBankInfo } from 'redux-store/bankInfo.slice';

const Page1: FC = () => {
    const history = useHistory();
    const bankInfo = useAppSelector((state) => state.bank.bankInfo);
    const dispatch = useAppDispatch();

    return (
        <div className="root">
            <div>hi from Page1. Edit the code</div>
            <Button variant="outlined" onClick={() => history.push('/page-2')}>
                Go to Page2
            </Button>
            <div>Doubler Value: {rootStore.doubler.counterValue}</div>
            <Button onClick={() => rootStore.doubler.increment()}>
                Increment
            </Button>
            <Button
                onClick={() => dispatch(fetchBankInfo({ ifsc: 'KARB0000001' }))}
            >
                Get Bank Info
            </Button>
            <div>Fetched Bank Info: {JSON.stringify(bankInfo)}</div>
        </div>
    );
};

export default observer(Page1);
