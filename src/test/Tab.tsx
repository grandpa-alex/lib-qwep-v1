import { BaseBox, BaseTab, BaseTabContent, BaseTabWrapper } from '@src/lib';

function Tab() {
    return (
        <BaseBox style={{ paddingBottom: '300px' }}>
            <h2>BASE TAB</h2>

            <BaseTabWrapper
                defaultValue={'t-3'}
                // orientation={'horizontal'}
                tabsListProps={
                    {
                        // orientation: 'vertical'
                        // style: {
                        //     display: 'flex'
                        // },
                    }
                }
                tabs={[
                    <BaseTab value={'t-1'}>BaseTab_1</BaseTab>,
                    <BaseTab value={'t-2'}>BaseTab_2</BaseTab>,
                    <BaseTab value={'t-3'} disabled>
                        BaseTab_3
                    </BaseTab>,
                ]}
            >
                <BaseTabContent value={'t-1'}>BaseTabContent_1</BaseTabContent>
                <BaseTabContent value={'t-2'}>BaseTabContent_2</BaseTabContent>
                <BaseTabContent value={'t-3'}>BaseTabContent_3</BaseTabContent>
            </BaseTabWrapper>
        </BaseBox>
    );
}

export default Tab;
