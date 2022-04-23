import React, {FC} from 'react';
import {Link} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";

interface StyledLinkProps {
    to: string,
    hover?: object,
    focus?: object,
    activeLink?: object,
    isActive?: boolean
}


const StyledLink:FC<StyledLinkProps> = ({
                                            children,
                                            to,
                                            hover,
                                            focus,
                                            activeLink,
                                            isActive}) => {
    return (
        <Link
            as={NavLink}
            to={to}
            _hover={{textDecoration: 'none', ...hover}}
            _focus={{outline:'none', ...focus}}
            _activeLink={{color:'#666', ...activeLink}}
        >
            {children}
        </Link>
    );
};

export default StyledLink;