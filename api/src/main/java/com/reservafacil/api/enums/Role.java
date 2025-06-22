package com.reservafacil.api.enums;

public enum Role {
    CLIENT, ADMIN;

    public String getAuthority() {
        return "ROLE_" + name();
    }
}
