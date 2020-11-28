import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons/faProjectDiagram';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons/faPhoneSquare';
import { faBrain } from '@fortawesome/free-solid-svg-icons/faBrain';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons/faQuoteRight';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons/faQuoteLeft';
import { faLeaf } from '@fortawesome/free-solid-svg-icons/faLeaf';
import { faSun } from '@fortawesome/free-solid-svg-icons/faSun';
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons/faCloudShowersHeavy';
import { faFireAlt } from '@fortawesome/free-solid-svg-icons/faFireAlt';
import { faHammer } from '@fortawesome/free-solid-svg-icons/faHammer';

library.add(faBars,
            faBrain,
            faEnvelope,
            faProjectDiagram,
            faPhoneSquare,
            faExclamationCircle,
            faQuoteRight,
            faQuoteLeft,
            faLeaf,
            faSun,
            faHammer,
            faCloudShowersHeavy,
            faFireAlt);

dom.watch();
