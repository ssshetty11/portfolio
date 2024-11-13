import { IconType } from 'react-icons';

// Heroicons import for general utility icons
import {
	HiChevronUp,
	HiChevronDown,
	HiChevronRight,
	HiChevronLeft,
	HiOutlineArrowPath,
	HiCheck,
	HiMiniQuestionMarkCircle,
	HiMiniMinus,
	HiMiniPlus,
	HiMiniUser,
	HiMiniXMark,
	HiEyeDropper,
	HiOutlineLink,
	HiExclamationTriangle,
	HiArrowUpRight,
	HiInformationCircle,
	HiExclamationCircle,
	HiCheckCircle,
} from "react-icons/hi2";

// Font Awesome import for social media and email icons
import {
	FaDiscord,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaEnvelope
} from "react-icons/fa6";

// Define the icon library object with a Record type for mapping string keys to icons
export const iconLibrary: Record<string, IconType> = {
	chevronUp: HiChevronUp,
	chevronDown: HiChevronDown,
	chevronRight: HiChevronRight,
	chevronLeft: HiChevronLeft,
	refresh: HiOutlineArrowPath,
	check: HiCheck,
	helpCircle: HiMiniQuestionMarkCircle,
	infoCircle: HiInformationCircle,
	warningTriangle: HiExclamationTriangle,
	errorCircle: HiExclamationCircle,
	checkCircle: HiCheckCircle,
	eyeDropper: HiEyeDropper,
	person: HiMiniUser,
	close: HiMiniXMark,
	openLink: HiOutlineLink,
	discord: FaDiscord,
	github: FaGithub,
	arrowUpRight: HiArrowUpRight,
	minus: HiMiniMinus,
	plus: HiMiniPlus,
	// Newly added icons
	instagram: FaInstagram,
	linkedin: FaLinkedin,
	gmail: FaEnvelope,
};
