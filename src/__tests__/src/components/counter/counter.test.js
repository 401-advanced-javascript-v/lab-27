import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../../../../components/counter/counter.js';

describe('<Counter />', () => {
    it('is alive at application start', () => {
        let app = shallow(<Counter />);
        expect(app.find('span').exists()).toBeTruthy();
    })

    it('changes state on up click', () => {
        let app = mount( <Counter />);
        let button = app.find('.up');
        button.simulate('click');
        expect(app.state('count')).toBe(1);
        expect(app.state('polarity')).toEqual('positive');
    })

    it('changes state on down click', () => {
        let app = mount( <Counter />);
        let button = app.find('.down');
        button.simulate('click');
        expect(app.state('count')).toBe(-1);
        expect(app.state('polarity')).toEqual('negative');
    })

    it('renders right', () =>{
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
    })
}) 