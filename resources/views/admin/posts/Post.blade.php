@include('admin.posts.Block')

<script>
    class Post extends BaseClass {
        all_categories = @json(\App\Model\Admin\PostCategory::getForSelect());
        statuses = @json(\App\Model\Admin\Post::STATUSES);
        no_set = [];

        before(form) {
            this.image = {};
            this.status = 0;
            this.blocks = form.blocks && form.blocks.length
                ? form.blocks
                : [
                    new Block({ title: '', content: '', galleries: [] }),
                    new Block({ title: '', content: '', galleries: [] }),
                    new Block({ title: '', content: '', galleries: [] })
                ];
        }

        after(form) {

        }

        set blocks(value) {
            this._blocks = (value || []).map(val => new Block(val, this));
        }

        get blocks() {
            return this._blocks;
        }

        get image() {
            return this._image;
        }

        set image(value) {
            this._image = new Image(value, this);
        }

        get submit_data() {
            let data = new FormData();

            safeAppend(data, 'name', this.name);
            safeAppend(data, 'cate_id', this.cate_id);
            safeAppend(data, 'intro', this.intro);
            safeAppend(data, 'body', this.body);
            safeAppend(data, 'status', this.status);

            let image = this.image.submit_data;
            if (image) data.append('image', image);

            this.blocks.forEach((block, bIndex) => {
                data.append(`blocks[${bIndex}][code]`, 'block-'+bIndex);
                data.append(`blocks[${bIndex}][title]`, block.title);
                data.append(`blocks[${bIndex}][body]`, block.body);

                block.galleries.forEach((g, gIndex) => {
                    if (g.id) {
                        data.append(`blocks[${bIndex}][galleries][${gIndex}][id]`, g.id);
                    }
                    let gallerySubmit = g.image.submit_data; // Đây có thể là file object
                    if (gallerySubmit) {
                        data.append(`blocks[${bIndex}][galleries][${gIndex}][image]`, gallerySubmit);
                    } else {
                        data.append(`blocks[${bIndex}][galleries][${gIndex}][image_obj]`, g.id);
                    }
                });
            });

            return data;
        }
    }
</script>
