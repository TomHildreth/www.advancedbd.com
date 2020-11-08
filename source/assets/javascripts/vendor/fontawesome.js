import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faHammer } from '@fortawesome/free-solid-svg-icons/faHammer';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons/faProjectDiagram';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons/faPhoneSquare';
import { faBrain } from '@fortawesome/free-solid-svg-icons/faBrain';

library.add(faBars,
            faBrain,
            faEnvelope,
            faProjectDiagram,
            faPhoneSquare,
            faExclamationCircle,
            faHammer);

dom.watch();
