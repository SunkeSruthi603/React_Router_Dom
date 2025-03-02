import React from "react";

function Team() {
    return(

        <div class="font-sans">
      <div class="max-w-4xl mx-auto">
        <div class="text-center">
          <h2 class="text-gray-800 text-4xl font-bold">Meet our team</h2>
        </div>

        <div class="grid sm:grid-cols-3 gap-6 max-sm:justify-center mt-12 max-sm:max-w-xs mx-auto">
          <div class="bg-gray-800 p-3 border rounded-lg">
            <img src="https://readymadeui.com/team-1.webp" class="w-full object-contain aspect-square object-top rounded-lg" />

            <div class="text-center mt-4 mb-1">
              <h4 class="text-base font-semibold text-white">Software Engineer</h4>
              <p class="text-xs mt-1 text-gray-300">John Doe</p>
            </div>
          </div>

          <div class="bg-gray-800 p-3 border rounded-lg">
            <img src="https://readymadeui.com/team-2.webp" class="w-full object-contain aspect-square object-top rounded-lg" />

            <div class="text-center mt-4 mb-1">
              <h4 class="text-base font-semibold text-white">Web Developer</h4>
              <p class="text-xs mt-1 text-gray-300">Mark Adair</p>
            </div>
          </div>

          <div class="bg-gray-800 p-3 border rounded-lg">
            <img src="https://readymadeui.com/team-3.webp" class="w-full object-contain aspect-square object-top rounded-lg" />

            <div class="text-center mt-4 mb-1">
              <h4 class="text-base font-semibold text-white">Web Designer</h4>
              <p class="text-xs mt-1 text-gray-300">Simon Konecki</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Team;