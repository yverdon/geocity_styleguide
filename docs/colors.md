Please prefer the classes generated from Tailwind over hardcoded value in CSS files.

{% for palette, values in colors %}

## {{ palette }}

{% include "@color" %}
{% endfor %}
