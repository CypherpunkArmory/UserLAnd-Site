/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub, faTwitter, faSlack } from '@fortawesome/free-brands-svg-icons'
import { fas, faCheckSquare, faChevronDown, faChevronUp, faExclamationTriangle, faTimes, faBook } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas, faCheckSquare, faChevronDown, faChevronUp, faExclamationTriangle, faTimes, faBook, faGithub, faTwitter, faSlack)