import React from 'react'
import { Location } from '@reach/router'
import queryString from 'query-string'

const withLocation = ComponentToWrap => props => (
  <Location>
    {({ location, navigate }) => (
      <ComponentToWrap
        {...props}
        location={location}
        navigate={navigate}
        search={typeof window !== 'undefined' && window.location.search ? queryString.parse(window.location.search).search : {}}
      />
    )}
  </Location>
)

export default withLocation