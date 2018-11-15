import os
from django.conf import settings

def get_image_file_path(instance, filename):
    name, ext = os.path.splitext(filename)
    filename = make_random_letters_and_digit_string(32) + ext

    return os.path.join('photos', filename)
