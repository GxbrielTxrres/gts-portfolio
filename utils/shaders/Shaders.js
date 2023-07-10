// TO DO
// CREATE AN OBJECT FOR VERTEX AND FRAGMENT SHADERS
// shaders.vertex.nameOfShader && shaders.fragment.nameOfShader

export const shaders = {
	vertexShader: `
    varying vec2 vUv; 

    void main() {
    vUv = uv; 

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  }
`,
	fragmentShader: `

    // precision mediump float;

    // varying vec2 vUv;
      // uniform vec2 uResolution;
    // uniform float u_time;

    // #define PI 3.141592653589793


    // #define cx_div(a, b) vec2(((a.x*b.x+a.y*b.y)/(b.x*b.x+b.y*b.y)),((a.y*b.x-a.x*b.y)/(b.x*b.x+b.y*b.y)))

    // vec2 as_polar(vec2 z) {
    //   return vec2(
    // 	length(z),
    // 	atan(z.y, z.x)
    //   );
    // }
    
    // vec2 cx_log(vec2 a) {
    // 	vec2 polar = as_polar(a);
    // 	float rpart = polar.x;
    // 	float ipart = polar.y;
    // 	if (ipart > PI) ipart=ipart-(2.0*PI);
    // 	return vec2(log(rpart),ipart);
    // }
    
    // vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
    // 	return a + b*cos( 0.38*2.*PI*(c*t+d) );
    // }

    // void main() { 
    // 	vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.y, uResolution.x);
    // 	vec2 z = uv;

    // 	float angle = sin(u_time/5.) * 2. * PI;
    // 	float length = .2;
        
    // 	// Spin our points in a circle of radius length
    // 	float c = cos(angle);
    // 	float s = sin(angle);
    // 	vec2 p = vec2( s*length, c*length);
    // 	vec2 q = vec2( s*-length, c*-length );

    // 	vec2 division = cx_div((z - p), (z - q));

    // 	vec2 log_p_over_q = cx_log(division);

    // 	float imaginary = log_p_over_q.y / PI;

    // 	vec3 col = palette( imaginary, vec3(0.50,.52,0.53), vec3(.46,.32,.35), vec3(.82,.84,.65), vec3(0.53,0.23,0.22));


    // gl_FragColor = vec4(col,1.0); 

  precision mediump float;

    varying vec2 vUv;
      uniform vec2 uResolution;
    uniform float u_time;
    uniform float uAlpha;
      uniform vec2 uMouse;

     #define PI 3.141592653589793


      #define cx_mul(a, b) vec2(a.x*b.x - a.y*b.y, a.x*b.y + a.y*b.x)
      #define cx_div(a, b) vec2(((a.x*b.x + a.y*b.y)/(b.x*b.x + b.y*b.y)),((a.y*b.x - a.x*b.y)/(b.x*b.x + b.y*b.y)))
      #define cx_sin(a) vec2(sin(a.x) * cosh(a.y), cos(a.x) * sinh(a.y))
      #define cx_cos(a) vec2(cos(a.x) * cosh(a.y), -sin(a.x) * sinh(a.y))
      
      vec2 as_polar(vec2 z) {
        return vec2(
          length(z),
          atan(z.y, z.x)
        );
      }
      
      vec2 cx_tan(vec2 a) {return cx_div(cx_sin(a), cx_cos(a)); }
      vec2 cx_log(vec2 a) {
          vec2 polar = as_polar(a);
          float rpart = polar.x;
          float ipart = polar.y;
          if (ipart > PI) ipart=ipart-(2.0*PI);
          return vec2(log(rpart),ipart);
      }
      vec2 cx_pow(vec2 v, float p) {
        vec2 z = as_polar(v);
        return pow(z.x, p) * vec2(cos(z.y * p), sin(z.y * p));
      }

      vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d )
{
return a + b*cos(2. * PI *(c*t+d) );
}

    void main() { 
        vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.y, uResolution.x);
        vec2 z = uv;

        vec3 black = vec3(-1.,-1.,-1.);

        float angle = sin(u_time/5.) * 2. * PI;
        float length = .2;
        
        // Spin our points in a circle of radius length
        float c = cos(angle);
        float s = sin(angle);
        vec2 p = vec2( s*length, c*length);
        vec2 q = vec2( s*-length, c*-length );

        vec2 division = cx_div((z - p), (z - q));

        vec2 log_p_over_q = cx_log(division);

        float imaginary = log_p_over_q.y / PI;

        vec3 col = palette( imaginary, black, vec3(.46,.32,.35), vec3(.82,.84,.65), vec3(0.53,0.23,0.22));


    gl_FragColor = vec4(0.,0.,0.,uAlpha); 
  }`,
	cursorFragShader: `
  precision mediump float;

    varying vec2 vUv;
      uniform vec2 uResolution;
    uniform float u_time;
    uniform float uAlpha;
      uniform vec2 uMouse;

     #define PI 3.141592653589793


      #define cx_mul(a, b) vec2(a.x*b.x - a.y*b.y, a.x*b.y + a.y*b.x)
      #define cx_div(a, b) vec2(((a.x*b.x + a.y*b.y)/(b.x*b.x + b.y*b.y)),((a.y*b.x - a.x*b.y)/(b.x*b.x + b.y*b.y)))
      #define cx_sin(a) vec2(sin(a.x) * cosh(a.y), cos(a.x) * sinh(a.y))
      #define cx_cos(a) vec2(cos(a.x) * cosh(a.y), -sin(a.x) * sinh(a.y))
      
      vec2 as_polar(vec2 z) {
        return vec2(
          length(z),
          atan(z.y, z.x)
        );
      }
      
      vec2 cx_tan(vec2 a) {return cx_div(cx_sin(a), cx_cos(a)); }
      vec2 cx_log(vec2 a) {
          vec2 polar = as_polar(a);
          float rpart = polar.x;
          float ipart = polar.y;
          if (ipart > PI) ipart=ipart-(2.0*PI);
          return vec2(log(rpart),ipart);
      }
      vec2 cx_pow(vec2 v, float p) {
        vec2 z = as_polar(v);
        return pow(z.x, p) * vec2(cos(z.y * p), sin(z.y * p));
      }

      vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d )
{
return a + b*cos(2. * PI *(c*t+d) );
}

    void main() { 
        vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.y, uResolution.x);
        vec2 z = uv;

        vec3 black = vec3(uMouse.x - 0.02, abs(uMouse.x), abs(sin(uMouse.y - 0.02 * u_time) * 5.));

        float angle = sin(u_time/5.) * 2. * PI;
        float length = .2;
        
        // Spin our points in a circle of radius length
        float c = cos(angle);
        float s = sin(angle);
        vec2 p = vec2( s*length, c*length);
        vec2 q = vec2( s*-length, c*-length );

        vec2 division = cx_div((z - p), (z - q));

        vec2 log_p_over_q = cx_log(division);

        float imaginary = log_p_over_q.y / PI;

        vec3 col = palette( imaginary, black, vec3(.46,.32,.35), vec3(.82,.84,.65), vec3(0.53,0.23,0.22));


    gl_FragColor = vec4(col,uAlpha); 
  }`,
	animatedVertexShader: `
    attribute float aRandom;

    uniform vec2 uResolution;
    uniform float u_time;
    uniform float uAlpha;

    varying vec2 vUv; 

    void main() {
    vUv = uv; 

    vec3 pos = position;

    pos += aRandom*(0.5 * sin(u_time) + 0.5)*normal;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);
  }
`,
	basigFrag: `
    varying vec2 vUv;
    uniform vec2 uResolution;
    uniform float u_time;
    uniform float uAlpha;

  #define PI 3.141592653589793

  void main() {


    gl_FragColor = vec4(vUv.x,vUv.xy,uAlpha); 
  }`,
};
