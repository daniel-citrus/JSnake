<h1>Snake JS</h1>
<p>The original snake game written in Javascript.</p>

[ ] Snake
    [ ] vars
        [X] direction
        [X] length
        [ ] speed
    [ ] functions
        [ ] grow
        [ ] die
        [ ] move forward
        [ ] change direction
        [ ] check head collision
            [ ] hits food
              [ ] grow snake depending on food
            [ ] hits self
              [ ] snake dies
            [ ] hits wall (check wall type)
              [ ] if infinity
                [ ] move head to opposite wall
              [ ] else
                [ ] snake dies
            [ ] hits other snake
              [ ] head to head
                [ ] larger snake eats smaller snake
                [ ] equal size = both die
              [ ] head to body
                [ ] snake whose head hits other snake dies
[X] arena
    [X] vars
        [X] cells
        [X] border type
    [X] funcs
        [X] create arena
        [X] update cell
[ ] players
    [ ] movement listeners
    [ ] score
    [ ] snake reference (maybe snake id?)