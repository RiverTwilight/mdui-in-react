import React from 'react'
import { shallow } from 'enzyme'
import List from '../index'

describe('List Component', () => {
    it('provided a none empty array', () => {
        const res = shallow(<List items={['dsf', 'fsad']} />)
        expect(res.find('li').length).toEqual(2)
    })
})
