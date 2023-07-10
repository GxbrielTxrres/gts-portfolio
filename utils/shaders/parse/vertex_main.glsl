
    transformed = rotate(transformed, vec3(0.0,1.0,0.0), u_progress*3.14*3.);
    // transformed += aRandom*(0.5 * sin(u_progress * 2.))*normalize(normal);
    transformed += u_progress*aRandom*normal;