const SignIn = () => {
  return (
    <main>
      <section
        style={{
          backgroundImage:
            "linear-gradient(to right bottom, rgba(0,0,0,0.6),rgba(0,0,0,0.3)),url(https://www.presello.com/wp-content/uploads/2019/10/upscale-modern-townhouses-facade.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative w-full h-[300px] overflow-hidden flex items-center "
      >
        <h1 className="uppercase font-semibold text-3xl max-w-7xl mx-auto text-white">
          Sign In
        </h1>
      </section>
      <section>
        <div>Form</div>
        <div>Image</div>
      </section>
    </main>
  );
};

export default SignIn;
