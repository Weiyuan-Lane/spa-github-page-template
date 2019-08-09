import Link from 'next/link';
import PropTypes from 'prop-types'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const basePath = publicRuntimeConfig.basePath || ''
const basePathEndsWithSlash = basePath.endsWith('/')

export default function BasePathLink({ href, children, ...props }){
  let finalHref
  if (basePathEndsWithSlash || href.startsWith('/')) {
    finalHref = `${basePath}${href}`
  } else {
    finalHref = `${basePath}/${href}`
  }

  return (
    <Link 
      href={href}
      as={finalHref}
      {...props}>
      {children}
    </Link>
  )
}

BasePathLink.propTypes = {
  href: PropTypes.string.isRequired,
}

