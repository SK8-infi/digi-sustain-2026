import urllib.request
import os

urls = {
    'partner1.png': 'https://lh3.googleusercontent.com/d/1EZkUtrVHx3MS8_KzFOnxZla0BKW3yTcx',
    'partner2.png': 'https://lh3.googleusercontent.com/d/1x-B4KOIIS8EnWVzuS7EFFISIeaKlaxlB',
    'hero1.jpg': 'https://lh3.googleusercontent.com/d/1OoQlP6Ucwi-7L4Oe_0Sl8TCAu8urbm2w',
    'hero2.jpg': 'https://lh3.googleusercontent.com/d/1AczsTl9ZAEC0j4xj6NSey5ml9YsMBISh',
    'hero3.jpg': 'https://lh3.googleusercontent.com/d/1sWTOeNuVDQxUhysQfr9DS6z9aJ5Lypj5',
    'hero4.jpg': 'https://lh3.googleusercontent.com/d/1bDYy_ReDauwg-bWK_cXmcHeNcSC7EWVh',
    'poster.jpg': 'https://lh3.googleusercontent.com/d/1qzkUJ3NWxHbdllW1Hd5Sp6N5bpSAM9sn',
    'institute.jpg': 'https://lh3.googleusercontent.com/d/1bDYy_ReDauwg-bWK_cXmcHeNcSC7EWVh',
    'doms.jpg': 'https://lh3.googleusercontent.com/d/1DvEi1hmZI1eS1F6SfG1S3o_Teb4weYhn',
}

target_dir = r'c:\Users\Aayush Shankar\OneDrive\Desktop\digi-sustain\digi-sustain-2026\src\assets'
if not os.path.exists(target_dir):
    os.makedirs(target_dir)

opener = urllib.request.build_opener()
opener.addheaders = [('User-agent', 'Mozilla/5.0')]
urllib.request.install_opener(opener)

for name, url in urls.items():
    path = os.path.join(target_dir, name)
    print(f'Downloading {url} to {path}...')
    try:
        urllib.request.urlretrieve(url, path)
        print('Success!')
    except Exception as e:
        print(f'Failed: {e}')
