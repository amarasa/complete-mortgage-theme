<?php header_hub_get_custom_header(); ?>

<main class="container mx-auto my-8">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <article class="mb-6 p-6 bg-white shadow-md rounded-lg">
                <h1 class="text-3xl font-bold mb-4"><?php the_title(); ?></h1>
                <div class="text-gray-700 mb-4">
                    <?php the_content(); ?>
                </div>

            </article>

            <div class="container mx-auto p-6">
                <!-- Use a grid to layout 3 columns on medium+ screens -->
                <div class="team grid grid-cols-1 md:grid-cols-3 gap-6">

                    <!-- Column 1 -->
                    <div class="team-members eh-members bg-gray-50 shadow p-4">
                        <img src="https://placehold.co/300x200" alt="Team Member 1" class="w-full mb-4">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Aliquam erat volutpat.
                        </p>
                    </div>

                    <!-- Column 2 -->
                    <div class="team-members eh-team bg-gray-50 shadow p-4">
                        <img src="https://placehold.co/300x250" alt="Team Member 2" class="w-full mb-4">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in metus a dolor fermentum varius. Integer eu justo id nibh ornare sagittis.
                        </p>
                    </div>

                    <!-- Column 3 -->
                    <div class="team-members eh-members bg-gray-50 shadow p-4">
                        <img src="https://placehold.co/300x150" alt="Team Member 3" class="w-full mb-4">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non purus at lacus ullamcorper fermentum sit amet et quam.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non purus at lacus ullamcorper fermentum sit amet et quam.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non purus at lacus ullamcorper fermentum sit amet et quam.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non purus at lacus ullamcorper fermentum sit amet et quam.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non purus at lacus ullamcorper fermentum sit amet et quam.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non purus at lacus ullamcorper fermentum sit amet et quam.
                        </p>
                    </div>

                </div>

                <div class="container mx-auto p-6">
                    <!-- Use a grid to layout 3 columns on medium+ screens -->
                    <div class="team grid grid-cols-1 md:grid-cols-3 gap-6">

                        <!-- Column 1 -->
                        <div class="team-members eh-team bg-gray-50 shadow p-4">
                            <img src="https://placehold.co/300x200" alt="Team Member 1" class="w-full mb-4">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Aliquam erat volutpat.
                            </p>
                        </div>

                        <!-- Column 2 -->
                        <div class="team-members eh-team bg-gray-50 shadow p-4">
                            <img src="https://placehold.co/300x250" alt="Team Member 2" class="w-full mb-4">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in metus a dolor fermentum varius. Integer eu justo id nibh ornare sagittis.
                            </p>
                        </div>

                        <!-- Column 3 -->
                        <div class="team-members eh-team bg-gray-50 shadow p-4">
                            <img src="https://placehold.co/300x150" alt="Team Member 3" class="w-full mb-4">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non purus at lacus ullamcorper fermentum sit amet et quam.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non purus at lacus ullamcorper fermentum sit amet et quam.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non purus at lacus ullamcorper fermentum sit amet et quam.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non purus at lacus ullamcorper fermentum sit amet et quam.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non purus at lacus ullamcorper fermentum sit amet et quam.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non purus at lacus ullamcorper fermentum sit amet et quam.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non purus at lacus ullamcorper fermentum sit amet et quam.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non purus at lacus ullamcorper fermentum sit amet et quam.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non purus at lacus ullamcorper fermentum sit amet et quam.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non purus at lacus ullamcorper fermentum sit amet et quam.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non purus at lacus ullamcorper fermentum sit amet et quam.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non purus at lacus ullamcorper fermentum sit amet et quam.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non purus at lacus ullamcorper fermentum sit amet et quam.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non purus at lacus ullamcorper fermentum sit amet et quam.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non purus at lacus ullamcorper fermentum sit amet et quam.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non purus at lacus ullamcorper fermentum sit amet et quam.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non purus at lacus ullamcorper fermentum sit amet et quam.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non purus at lacus ullamcorper fermentum sit amet et quam.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non purus at lacus ullamcorper fermentum sit amet et quam.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non purus at lacus ullamcorper fermentum sit amet et quam.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non purus at lacus ullamcorper fermentum sit amet et quam.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non purus at lacus ullamcorper fermentum sit amet et quam.
                            </p>
                        </div>

                    </div>

                <?php endwhile;
        else : ?>
                <p class="text-center text-gray-600">No content found.</p>


            <?php endif; ?>
</main>
<?php footer_hub_get_custom_footer(); ?>