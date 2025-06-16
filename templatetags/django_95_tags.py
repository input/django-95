from django import template

register = template.Library()


@register.simple_tag(takes_context=True)
def is_content_window(context):
    user = context['user']
    request = context['request']
    if (user.is_authenticated and
        request.resolver_match.url_name not in ['index', 'app_list']):
        return True
    return False
